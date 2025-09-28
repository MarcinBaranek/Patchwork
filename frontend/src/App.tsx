import React, { useState } from 'react'
import PlayerBoard from './components/PlayerBoard'
import PawnBoard from './components/PawnBoard'
import PatchPalette from './components/PatchPalette'
import PlayerBox from './components/PlayerBox'
import RotateZone from './components/RotateZone'
import TimeBoard from "./components/TimeBoard";
import {getWildPatch, PATCHES} from './data/patches'
import {INCOME_SPACES, WILD_SPACES} from "./data/timeTrack";
import {Patch, PlayerState} from './models/types'
import {
    computeAbsoluteCoords,
    canPlace, rotatePatch, mirrorPatch, mirrorPatchVertically
} from './utils/placement'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BOARD_SIZE, TIME_BOARD_LENGTH, START_BUTTONS} from "./data/constants";


function createEmptyBoard() {
    console.log("Create empty board!")
    return Array.from({length: BOARD_SIZE}, () => Array.from({length: BOARD_SIZE}, () => null as string | null))
}

export default function App() {
    const [patches, setPatches] = useState<Patch[]>(PATCHES)
    const [players, setPlayers] = useState<PlayerState[]>(() => [
        {
            id: 0,
            name: 'Alice',
            board: createEmptyBoard(),
            buttons: START_BUTTONS,
            score: -2 * BOARD_SIZE * BOARD_SIZE + START_BUTTONS,
            position: 0,
            income_buttons: 0,
            pawn_color: "rgba(108,54,182,0.62)"
        },
        {
            id: 1,
            name: 'Bob',
            board: createEmptyBoard(),
            buttons: START_BUTTONS,
            score: -2 * BOARD_SIZE * BOARD_SIZE + START_BUTTONS,
            position: 0,
            income_buttons: 0,
            pawn_color: "rgba(35,110,39,0.75)"
        }
    ])
    const [current, setCurrent] = useState<number>(1)
    const [selectedPatchId, setSelectedPatchId] = useState<string | null>(null)
    const [patchIndex, setPatchIndex] = useState<number>(3)


    function calculateButtonsGain() {
        const currentPlayer = players.find((p) => p.id === current)!
        const opponent = players.find((p) => p.id !== current)!
        return Math.max(opponent.position - currentPlayer.position + 1, 0);
    }

    function endTurn() {
        const currentPlayer = players.find((p) => p.id === current)!
        const opponent = players.find((p) => p.id !== current)!
        if (opponent.position >= currentPlayer.position) {
            movePawn(currentPlayer, opponent.position - currentPlayer.position + 1, true)
            return
        }
        setCurrent((c) => (c === 1 ? 0 : 1))
    }

    function movePawnOnBoard(player: PlayerState, steps: number) {
        if (!player) {return}
        const newPos = Math.min(player.position + steps, TIME_BOARD_LENGTH - 1)
        setPlayers(
            (prev) => prev.map((p) => {
                if (p.id !== player.id) return p
                return {...p, position: newPos}
            })
        )
    }

    function calculateIncome(player: PlayerState, steps: number, paid: boolean = false) {
        const oldPos = player.position
        const newPos = Math.min(player.position + steps, TIME_BOARD_LENGTH - 1)
        const crossedIncomes = INCOME_SPACES.filter(
            (pos) => pos > oldPos && pos <= newPos
        )
        let gained = 0
        if (crossedIncomes.length > 0) {
            gained = player.income_buttons * crossedIncomes.length // policz przychód z patchy
        }
        if (paid) {gained = gained + steps }
        setPlayers(
            (prev) => prev.map((p) => {
                if (p.id !== player.id) return p
                return {...p, buttons: player.buttons + gained}
            })
        )
        return player.buttons + gained
    }

    function updateScore(player: PlayerState, currentButtons : number) {
        setPlayers(
            (prev) => prev.map((p) => {
                if (p.id !== player.id) return p
                const emptySquares = p.board.flat().filter(c => c === null).length
                return {...p, score: -2 * emptySquares + currentButtons }
            })
        )
    }

    function movePawn(player: PlayerState, steps: number, paid: boolean = false) {
        // const player = players.find((p) => p.id === playerId)!
        const opponent = players.find((p) => p.id !== player.id)!
        const oldPos = player.position
        if (oldPos >= TIME_BOARD_LENGTH - 1) {
            setPatchIndex(3)
            return;
        }
        const newPos =  Math.min(player.position + steps, TIME_BOARD_LENGTH - 1)
        movePawnOnBoard(player, steps)
        const currentButtons = calculateIncome(player, steps, paid)
        updateScore(player, currentButtons)
        const crossedWild = WILD_SPACES.filter(
            (pos) => pos > oldPos && pos <= newPos
        )
        console.log("checking coressed wild: ", crossedWild)
        if (crossedWild.length > 0) {
            const idx = WILD_SPACES.indexOf(crossedWild[0])
            console.log("Wild patch idx: ", idx)
            if (idx !== -1) {WILD_SPACES.splice(idx, 1)}
            console.log("Wild patch placing!")
            placeWildPatch()
            setPatchIndex(1)
            // setCurrent(opponent.id)
            return
        }
        if (newPos > opponent.position) {
            console.log("Change player")
            setCurrent(opponent.id)
            if (patchIndex === 1) {
                setPatchIndex(3)
            }
        }
    }

    function placeWildPatch() {
        const wildPatch: Patch = getWildPatch()
        setSelectedPatchId(wildPatch.id)
        setPatches(prev => [wildPatch, ...prev])
    }
    function removePatch(patch: Patch) {
        patches.splice(0, patches.indexOf(patch))
            .forEach((value) => patches.push(value))
        setPatches(patches.filter(pp => pp.id !== patch.id))
        setSelectedPatchId(null)
    }
    function handlePlacePatch(patchId: string, x: number, y: number, playerId?: number) {
        const p = patches.find(p => p.id === patchId)
        if (!p) return
        const origin = {x, y}
        const absCoords = computeAbsoluteCoords(p.shape, origin)
        const player = players.find(p => p.id === playerId)!
        if (player.position >= TIME_BOARD_LENGTH - 1) {
            return;
        }
        if (player.id != current) return; // check owner of the board
        // Check if patch can be placed
        if (p.cost_in_buttons > player.buttons) return // check the budget
        const selectedPatchIndex = patches.indexOf(p)
        console.log("patchIndex in handle place", selectedPatchIndex)
        if (selectedPatchIndex > patchIndex - 1 || selectedPatchIndex == -1) return  // check if took allowed patches
        if (!canPlace(absCoords, player.board)) {return}
        const newBoard = player.board.map(row => row.slice())
        absCoords.forEach((
            (cord, i) => {
                newBoard[cord.y][cord.x] = p.colors(i)
            }
        ))
        const updatedPlayer = {
            ...player,
            board: newBoard,
            buttons: player.buttons - p.cost_in_buttons,
            income_buttons: player.income_buttons + p.income_buttons,
        }
        setPlayers((prev) => prev.map((pl) => {
            if (pl.id !== player.id) return pl
            return updatedPlayer
        }))
        removePatch(p)
        movePawn(updatedPlayer, p.cost_in_squares)
    }

    const currentPlayer = players.find(p => p.id === current)!

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="app-root">
                <h1>Patchwork — Local 2P</h1>
                <div className="top-row">
                    <div className="left-column">
                        <PlayerBox
                            player={players[0]}
                            currentPlayerId={currentPlayer.id}
                        />
                    </div>
                    <div className="right-column">
                        <PlayerBox
                            player={players[1]}
                            currentPlayerId={currentPlayer.id}
                        />
                    </div>
                </div>
                <div className="top-row">
                    <div className="left-column"
                         style={{
                             display: "flex",
                             justifyContent: "space-evenly",
                             flexDirection: "column",
                             // gap: "4rem"
                             // margin: "8rem",
                         }}
                    >
                        <PlayerBoard
                            player={players[0]}
                            patches={patches}
                            onPlacePatch={handlePlacePatch}
                        />
                        <div className="left-stats">Empty
                            squares: {players[0].board.flat().filter(c => c === null).length}</div>
                    </div>

                    <div className="center-column"
                         style={{
                             display: "flex",
                             justifyContent: "space-evenly",
                             flexDirection: "column",
                             // margin: "8rem",
                         }}
                    >
                        <PawnBoard gain={calculateButtonsGain()} onNext={endTurn}/>
                        <div className="actions"
                             style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: "2rem", marginRight: "2rem", marginBottom: "1rem"}}
                        >
                            <RotateZone
                                setPatches={setPatches}
                                rotateCallback={mirrorPatch}
                                icon={()=> {return "↔"}}
                            />
                            <RotateZone
                                setPatches={setPatches}
                                rotateCallback={mirrorPatchVertically}
                                icon={()=> {return "↔"}}
                            />
                            <RotateZone
                                setPatches={setPatches}
                                rotateCallback={rotatePatch}
                                icon={() => {return "🔄"}}
                            />
                        </div>
                        <div className="controls">
                            <PatchPalette patches={patches}
                                          onSelect={setSelectedPatchId}
                                          limit={patchIndex}
                            />
                        </div>
                    </div>

                    <div className="right-column"
                         style={{
                             display: "flex",
                             justifyContent: "space-evenly",
                             flexDirection: "column",
                             // margin: "8rem",
                         }}
                    >
                        <PlayerBoard
                            player={players[1]}
                            patches={patches}
                            onPlacePatch={handlePlacePatch}
                        />
                        <div className="right-stats">Empty
                            squares: {players[1].board.flat().filter(c => c === null).length}</div>
                    </div>
                </div>
                <TimeBoard players={players} />
                <div className="controls">
                    <PatchPalette
                        patches={patches}
                        onSelect={setSelectedPatchId}
                        limit={undefined}
                        skip={patchIndex}
                    />
                </div>
            </div>
        </DndProvider>
    )
}
