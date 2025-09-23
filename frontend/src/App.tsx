import React, {useMemo, useState} from 'react'
import PlayerBoard from './components/PlayerBoard'
import PawnBoard from './components/PawnBoard'
import PatchPalette from './components/PatchPalette'
import PlayerBox from './components/PlayerBox'
import RotateZone from './components/RotateZone'
import MirrorDropZone from "./components/MirrorZone";
import TimeBoard from "./components/TimeBoard";
import {PATCHES} from './data/patches'
import {INCOME_SPACES, WILD_SPACES} from "./data/timeTrack";
import {Patch, PlayerState} from './models/types'
import {
    computeAbsoluteCoords,
    canPlace
} from './utils/placement'
import {computeIncome} from "./utils/calculator";
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BOARD_SIZE, TIME_BOARD_LENGTH, START_BUTTONS} from "./data/constants";


function createEmptyBoard() {
    console.log("Create empty board!")
    return Array.from({length: BOARD_SIZE}, () => Array.from({length: BOARD_SIZE}, () => null as string | null))
}

export default function App() {
    const [patches, setPatches] = useState<Patch[]>(PATCHES)
    const [pawnIndex, setPawnIndex] = useState<number>(0)
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

    const selectedPatch = useMemo(
        () => patches.find(
            p => p.id === selectedPatchId
        ) ?? null, [patches, selectedPatchId]
    )

    function endTurn() {
        const currentPlayer = players.find((p) => p.id === current)!
        const opponent = players.find((p) => p.id !== current)!
        if (opponent.position >= currentPlayer.position) {
            movePawn(currentPlayer.id, opponent.position - currentPlayer.position + 1)
            return
        }
        setCurrent((c) => (c === 1 ? 0 : 1))
    }

    function movePawn(playerId: number, steps: number) {
        setPlayers(
            (prev) => prev.map((p) => {
                if (p.id !== playerId) return p
                const oldPos = p.position
                const newPos = Math.min(p.position + steps, TIME_BOARD_LENGTH)
                const crossedIncomes = INCOME_SPACES.filter(
                    (pos) => pos > oldPos && pos <= newPos
                )

                let gained = 0
                const potential_income = computeIncome(p, PATCHES)
                if (crossedIncomes.length > 0) {
                    gained = potential_income * crossedIncomes.length // policz przychód z patchy
                }
                const opponent = prev.find((p) => p.id !== playerId)!

                const crossedWild = WILD_SPACES.find(space => space === newPos)
                if (crossedWild !== undefined) {
                    placeWildPatch(p.id, steps)
                    const idx = WILD_SPACES.indexOf(newPos)
                    if (idx !== -1) {WILD_SPACES.splice(idx, 1)}
                    // return p
                }
                if (newPos > opponent.position && !(crossedWild !== undefined)) {
                    setCurrent(opponent.id)
                }
                // Calculate score
                const emptySquares = p.board.flat().filter(c => c === null).length

                return {
                    ...p,
                    position: newPos,
                    score: -2 * emptySquares + p.buttons + gained + potential_income,
                    buttons: p.buttons + gained,
                    income_buttons: potential_income
                }
            })
        )

    }

    function placeWildPatch(playerId: number, steps: number) {
        const wildPatch: Patch = {
            id: `wild-${Date.now()}`, // unikalne id
            name: 'Wild 1x1',
            shape: [{x: 0, y: 0}],             // 1x1 patch
            width: 1,
            height: 1,
            cost_in_buttons: 0,
            cost_in_squares: 0,
            income_buttons: 0
        }

        // ustawiamy patch jako aktualnie wybrany dla gracza
        setSelectedPatchId(wildPatch.id)
        setPatches(prev => [wildPatch, ...prev])
        // movePawn(playerId, steps)
    }

    function handlePlacePatch(patchId: string, x: number, y: number, playerId?: number) {
        const p = patches.find(p => p.id === patchId)
        if (!p) return
        const origin = {x, y}
        const absCoords = computeAbsoluteCoords(p.shape, origin)

        const playerIndex = players.findIndex(pl => pl.id === (playerId ?? current))
        const board = players[playerIndex].board
        if (playerIndex != current) return; // check owner of the board
        // Check if patch can be placed
        if (p.cost_in_buttons > players[playerIndex].buttons) return // check the budget
        const patchIndex = patches.indexOf(p)
        if (patchIndex > 2 || patchIndex == -1) return
        if (!canPlace(absCoords, board)) {
            console.log("Can't place");
            return
        }

        // Create new board with patch placed
        const newBoard = board.map(row => row.slice())
        for (const c of absCoords) {
            newBoard[c.y][c.x] = p.id
        }

        // Update players state
        const newPlayers = players.slice()
        newPlayers[playerIndex] = {
            ...newPlayers[playerIndex],
            board: newBoard,
            buttons: newPlayers[playerIndex].buttons - p.cost_in_buttons
        }
        setPlayers(newPlayers)
        // Remove patch from available patches
        patches.splice(0, patches.indexOf(p))
            .forEach((value) => patches.push(value))
        setPatches(patches.filter(pp => pp.id !== p.id))
        setSelectedPatchId(null)
        movePawn(playerIndex, p.cost_in_squares)
    }

    function skipPlace() {
        setSelectedPatchId(null);
        endTurn()
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
                    <div className="left-column">
                        <PlayerBoard
                            player={players[0]}
                            patches={patches}
                            onPlacePatch={handlePlacePatch}
                        />
                        <div className="left-stats">Empty
                            squares: {players[0].board.flat().filter(c => c === null).length}</div>
                    </div>

                    <div className="center-column">
                        <PawnBoard onNext={endTurn}/>
                        <div className="actions"
                             style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: "2rem", marginRight: "2rem", marginBottom: "1rem"}}
                        >
                            <MirrorDropZone setPatches={setPatches} />
                            <RotateZone setPatches={setPatches} />
                        </div>
                        <div className="controls">
                            <PatchPalette patches={patches}
                                          onSelect={setSelectedPatchId}
                                          pawnIndex={pawnIndex}
                                          limit={3}
                            />
                        </div>
                    </div>

                    <div className="right-column">
                        <PlayerBoard
                            player={players[1]}
                            patches={patches}
                            onPlacePatch={handlePlacePatch}
                        />
                        <div className="right-stats">Empty
                            squares: {players[1].board.flat().filter(c => c === null).length}</div>
                    </div>
                </div>
                <TimeBoard players={players} onMove={movePawn} />
                <div className="controls">
                    <PatchPalette
                        patches={patches}
                        onSelect={setSelectedPatchId}
                        pawnIndex={pawnIndex + 3}
                        limit={undefined}
                    />
                </div>
            </div>
        </DndProvider>
    )
}
