import {Patch} from "../models/types";
import {useDrag} from "react-dnd";
import React from "react";


export default function PatchItem({ patch, onSelect }: { patch: Patch; onSelect: (id: string) => void }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'PATCH',
        item: { id: patch.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return (
        <div
            key={patch.id}
            ref={drag}
            className="patch-item"
            style={{
                opacity: isDragging ? 0.5 : 1,
                width: patch.width * 28,
                height: patch.height * 28,
                display: 'grid',
                gridTemplateColumns: `repeat(${patch.width}, 28px)`,
                gridTemplateRows: `repeat(${patch.height}, 28px)`,
                border: '1px solid #333',
                cursor: 'grab'
            }}
            onClick={() => onSelect(patch.id)}
        >
            {Array.from({ length: patch.width * patch.height }).map((_, idx) => {
                const x = idx % patch.width
                const y = Math.floor(idx / patch.width)
                console.log("patch", patch)
                const filled = patch.shape.some(cell => cell.x === x && cell.y === y)
                return (
                    <div
                        key={idx}
                        style={{
                            width: 28,
                            height: 28,
                            border: '1px solid #aaa',
                            backgroundColor: filled ? '#88bcee' : '#fff'
                        }}
                    />
                )
            })}
        </div>
    )
}
