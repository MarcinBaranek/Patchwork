// src/components/TimeBoard.tsx
import React from "react"
import { PlayerState } from "../models/types"
import {INCOME_SPACES, WILD_SPACES} from "../data/timeTrack";
import {TIME_BOARD_LENGTH} from "../data/constants";
import {getWildPatch} from "../data/patches";
import {wildPatch} from "./patchesStyles";

interface Props {
    players: PlayerState[]
}


function getBackgroundImage() {

}


export default function TimeBoard({ players }: Props) {

    return (
        <div className="time-board"
             style={{ gridTemplateColumns: "repeat(27, 32px)",
                gridAutoRows: "32px"}}
        >
            {Array.from({ length: TIME_BOARD_LENGTH }).map((_, index) => {
                // znajdź pionki stojące na tym polu
                const pawns = players.filter((p) => p.position === index)
                const isIncome = INCOME_SPACES.includes(index)
                const isWild = WILD_SPACES.includes(index)
                return (
                    <div
                        key={index}
                        style={{
                            width: 32,
                            height: 32,
                            border: "1px solid #aaa",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: isIncome? "#ecd706": isWild? wildPatch(): "#f8f8f8",
                            position: "relative",
                        }}
                    >
                        {index}
                        <div
                            style={{
                                display: "flex",
                                gap: 2,
                                position: "absolute",
                                bottom: 2,
                            }}
                        >
                            {pawns.map((p) => (
                                <div
                                    key={p.id}
                                    style={{
                                        width: 16,
                                        height: 16,
                                        borderRadius: "50%",
                                        background: p.pawn_color,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
