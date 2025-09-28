import React from 'react'
import {PlayerState} from "../models/types";
import buttonIcon from "../assets/button_image.png"

interface Props {
    player: PlayerState
    currentPlayerId: number
}

export default function PlayerBox({player, currentPlayerId}: Props) {
    const isActive = player.id === currentPlayerId
    return (
        <div className="player-box"
             style={{
                 backgroundColor: player.pawn_color,
                 filter: 'brightness(120%)',
                 display: 'flex',
                 flexDirection: "row",
                 justifyContent: "space-between",
                 borderRadius: '8px'}}
        >
            <div className={"left-column"}>
                <h3>{player.name} ({player.score})</h3>
                <h3 style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    {player.buttons}
                    <img
                        src={buttonIcon}
                        style={{width: "5vw", height: "5vw", alignItems: "center"}}
                    />
                    (+{player.income_buttons})</h3>
            </div>
            <div className={"right-column"}>
                {isActive && (
                    <div
                        className="hourglass"
                        style={{
                            fontSize: "5rem",
                            marginTop: 8,
                            animation: "spin 3s infinite linear",
                        }}
                    >
                        ⏳
                    </div>
                )}
            </div>
        </div>
    )
}
