import {Patch} from "../models/types";
import {useDrag} from "react-dnd";
import buttonIcon from '../assets/button_icon.png'
import React from "react";


export default function PatchItem({patch, onSelect}: {
    patch: Patch;
    onSelect: (id: string) => void
}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'PATCH',
        item: {id: patch.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    let leftIncome = patch.income_buttons
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
                const filled = patch.shape.some(cell => cell.x === x && cell.y === y)
                if (filled) {
                    leftIncome -= 1
                }
                return (
                    <div
                        key={idx}
                        style={{
                            width: 28,
                            height: 28,
                            border: '1px solid #aaa',
                            // opacity: (isDragging && !filled) ? 0. : 1,
                            opacity: (!filled) ? 0. : 1,
                            backgroundColor: filled ? '#88bcee' : '#fff',
                            textAlign: 'center',
                        }}
                    >
                        {leftIncome > -1 && filled ? button_icon() : null}
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


function button_icon() {
    return (
        <img
            src={buttonIcon}
            alt="button_icon"
            style={{width: 28, height: 28}}>
        </img>
    )
}