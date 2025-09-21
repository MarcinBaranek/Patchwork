import React, {useMemo, useState} from 'react'
import PlayerBoard from './components/PlayerBoard'
import PawnBoard from './components/PawnBoard'
import PatchPalette from './components/PatchPalette'
import PlayerBox from './components/PlayerBox'
import RotateZone from './components/RotateZone'
import MirrorDropZone from "./components/MirrorZone";
import {PATCHES} from './data/patches'
import {Patch, PlayerState} from './models/types'
import {
    computeAbsoluteCoords,
    canPlace
} from './utils/placement'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

const BOARD_SIZE = 9

function createEmptyBoard() {
    console.log("Create empty board!")
    return Array.from({length: BOARD_SIZE}, () => Array.from({length: BOARD_SIZE}, () => null as string | null))
}

export default function App() {
    const [patches, setPatches] = useState<Patch[]>(PATCHES)
    const [players, setPlayers] = useState<PlayerState[]>(() => [
        {
            id: 1,
            name: 'Alice',
            board: createEmptyBoard(),
            buttons: 5,
            score: 0,
            total_squares: 0
        },
        {
            id: 2,
            name: 'Bob',
            board: createEmptyBoard(),
            buttons: 5,
            score: 0,
            total_squares: 0
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
        setCurrent((c) => (c === 1 ? 0 : 1))
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
            buttons: newPlayers[playerIndex].buttons - p.cost_in_buttons,
            total_squares: newPlayers[playerIndex].total_squares + p.cost_in_squares
        }
        setPlayers(newPlayers)
        // Remove patch from available patches
        setPatches(patches.filter(pp => pp.id !== p.id))
        setSelectedPatchId(null)
    }

    function skipPlace() {
        setSelectedPatchId(null);
        endTurn()
    }

    const currentPlayer = players.find(p => p.id === current)!

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="app-root">
                <h1>Patchwork — Local 2P (TypeScript + Drag & Drop)</h1>
                <div className="top-row">
                    <div className="left-column">
                        <PlayerBox
                            player={players[0]}
                        />
                    </div>
                    <div className="right-column">
                        <PlayerBox
                            player={players[1]}
                        />
                    </div>
                </div>
                <div className="top-row">
                    <div className="left-column">
                        <PlayerBoard
                            player={players[0]}
                            selectedPatch={selectedPatch}
                            onPlacePatch={handlePlacePatch}
                        />
                        <div className="left-stats">Empty
                            squares: {players[0].board.flat().filter(c => c === null).length}</div>
                    </div>

                    <div className="center-column">
                        <PawnBoard currentPlayer={players[current].name}
                                   onNext={endTurn}/>
                        <div className="controls">
                            <PatchPalette patches={patches}
                                          onSelect={setSelectedPatchId}
                            />
                            <div className="actions">
                                <div>Selected: {selectedPatch?.name ?? '—'}</div>
                                <button onClick={skipPlace}>Skip & End Turn
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="right-column">
                        <PlayerBoard
                            player={players[1]}
                            selectedPatch={selectedPatch}
                            onPlacePatch={handlePlacePatch}
                        />
                        <div className="right-stats">Empty
                            squares: {players[1].board.flat().filter(c => c === null).length}</div>
                    </div>
                </div>
                <div className="controls">
                    <PatchPalette patches={patches} onSelect={setSelectedPatchId} />
                    <div className="actions">
                        <MirrorDropZone setPatches={setPatches} />
                        <RotateZone setPatches={setPatches} />
                    </div>
                </div>
                <div className="legend">
                    <p>Drag a patch from the palette onto your board. Flip and
                        rotate using buttons before placing.</p>
                </div>
            </div>
        </DndProvider>
    )
}
