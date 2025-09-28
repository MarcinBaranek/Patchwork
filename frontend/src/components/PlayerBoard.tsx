// src/components/PlayerBoard.tsx
import React, {useState} from 'react'
import { useDrop } from 'react-dnd'
import { PlayerState, Patch } from '../models/types'
import {
    computeAbsoluteCoords,
    canPlace
} from "../utils/placement";

interface Props {
    player: PlayerState
    patches: Patch[]
    onPlacePatch: (patchId: string, x: number, y: number, playerId: number) => void
}

export default function PlayerBoard({ player, patches, onPlacePatch }: Props) {
    const boardRef = React.useRef<HTMLDivElement>(null)
    const [hoverCoords, setHoverCoords] = useState<{ x: number; y: number }[]>([])
    const [isCorrectPlacement, setIsCorrectPlacement] = useState<boolean>(false)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'PATCH',
        hover: (item: { id: string }, monitor) => {
            const draggedPatch = patches.find(p => p.id === item.id)
            if (!boardRef.current || !draggedPatch) {
                setHoverCoords([])
                return
            }
            const offset = monitor.getClientOffset()
            if (!offset) {
                setHoverCoords([])
                return
            }

            const rect = boardRef.current.getBoundingClientRect()
            const cellSize = 28
            const x = Math.floor((offset.x - rect.left) / cellSize)
            const y = Math.floor((offset.y - rect.top) / cellSize)
            const absCoords = computeAbsoluteCoords(draggedPatch.shape, { x, y })
            setHoverCoords(absCoords)
            setIsCorrectPlacement(canPlace(absCoords, player.board))
        },
        drop: (item: { id: string }, monitor) => {
            if (!boardRef.current) {
                setHoverCoords([])
                return
            }
            const offset = monitor.getClientOffset()
            if (!offset) {
                setHoverCoords([])
                return
            }

            const rect = boardRef.current.getBoundingClientRect()
            const cellSize = 28 // rozmiar jednego pola

            const x = Math.floor((offset.x - rect.left) / cellSize)
            const y = Math.floor((offset.y - rect.top) / cellSize)

            console.log(`Patch ${item.id} dropped at`, x, y)
            onPlacePatch(item.id, x, y, player.id)
            setHoverCoords([])
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
    }), [patches, onPlacePatch, player.id])

    drop(boardRef)

    return (
        <div
            ref={boardRef}
            className={`player-board ${isOver ? 'highlight' : ''}`}
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${player.board[0].length}, 28px)`,
                gap: 1,
            }}
            onDragEnd={() => {setHoverCoords([])}}
            onDragLeave={() => {setHoverCoords([])}}
            onDragEndCapture={() => {setHoverCoords([])}}
            onDragExit={() => {setHoverCoords([])}}
            onDragExitCapture={() => {setHoverCoords([])}}
            onDragLeaveCapture={() => {setHoverCoords([])}}
        >
            {player.board.flatMap((row, y) =>
                row.map((cell, x) => {
                    const isHoverCell = hoverCoords.some(c => c.x === x && c.y === y)
                    return(
                    <div
                        key={`${x}-${y}`}
                        style={{
                            width: 28,
                            height: 28,
                            border: '1px solid #ddd',
                            backgroundColor: cell ? '#88bcee' : isHoverCell
                                ? (isCorrectPlacement ? 'rgba(0,200,0,0.4)' : "rgba(200,0,0,0.4)" )// zielone podświetlenie pod kursorem
                                : '#fff',
                        }}
                    >
                        {cell? (cell === '#88bcee'? null: cell) : null}
                    </div>
                )})
            )}
        </div>
    )
}
