import {Patch} from "../models/types";
import {useDrag} from "react-dnd";
import React from "react";
import {useEffect} from "react";
import {getEmptyImage} from "react-dnd-html5-backend";
import { useDragLayer } from 'react-dnd'


export default function PatchItem({patch, onSelect, preview=false}: {
    patch: Patch;
    onSelect: (id: string) => void
    preview?: boolean
}) {
    const [{isDragging}, drag, previewRef] = useDrag(() => ({
        type: 'PATCH',
        item: {id: patch.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    // Hide the default browser drag preview
    // useEffect(() => {
    //     preview(getEmptyImage(), { captureDraggingState: true })
    // }, [preview])
    return (
        <div
            key={patch.id}
            ref={drag}
            className="patch-item"
            style={{
                opacity: isDragging ? 0.3 : 1,
                width: patch.width * 28,
                height: patch.height * 28,
                display: 'grid',
                gridTemplateColumns: `repeat(${patch.width}, 28px)`,
                gridTemplateRows: `repeat(${patch.height}, 28px)`,
                justifyContent: "center",
                alignItems: "center",
                cursor: 'grab',
                marginBottom: "1rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
            }}
            onClick={() => onSelect(patch.id)}
        >
            {Array.from({length: patch.width * patch.height}).map((_, idx) => {
                const x = idx % patch.width
                const y = Math.floor(idx / patch.width)
                let square_idx = -1
                patch.shape.forEach(
                    (cell, i) => {
                        if (cell.x === x && cell.y === y) {
                            square_idx = i
                        }
                    })
                const filled = square_idx >=0
                return (
                    <div
                        key={idx}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid #aaa',
                            // opacity: (isDragging && !filled) ? 0. : 1,
                            opacity: (!filled) ? 0. : 1,
                            background: filled ? patch.colors(square_idx) : '#fff',
                            textAlign: 'center',
                        }}
                    >
                        {filled ? patch.colors(square_idx) : null}
                    </div>
                )
            })}
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "1vh",
                gap: "1rem",
                marginTop: "1rem",
                marginLeft: "1rem",
                marginRight: "1rem",
                fontSize: 18,
            }}>
                <div style={{display: "flex", gap: 0}}>
                    <span>🧵</span>
                    <span>{patch.cost_in_buttons}</span>
                </div>
                <div style={{display: "flex", gap: 0}}>
                    <span>⏳</span>
                    <span>{patch.cost_in_squares}</span>
                </div>
            </div>
        </div>
    )
}





function getItemStyles(initialOffset: any, currentOffset: any) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        }
    }

    const { x, y } = currentOffset
    const transform = `translate(${x}px, ${y}px)`
    return {
        transform,
        WebkitTransform: transform,
        pointerEvents: 'none', // don’t block mouse events
    }
}

function CustomDragLayer() {
    const {
        item,
        itemType,
        isDragging,
        initialOffset,
        currentOffset,
    } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }))

    if (!isDragging || itemType !== 'PATCH') {
        return null
    }

    return (
        <div
            style={{
                position: 'fixed',
                pointerEvents: 'none',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 100,
            }}
        >
            <div
                // style={getItemStyles(initialOffset, currentOffset)}
            >
                {/* Render your patch here but more transparent */}
                <div style={{ opacity: 0.5 }}>
                    <PatchItem patch={item.patch} onSelect={() => {}} />
                </div>
            </div>
        </div>
    )
}
