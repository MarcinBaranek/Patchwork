import React from 'react'
import {PlayerState} from "../models/types";

interface Props {
    player: PlayerState
}

export default function PlayerBox({player}: Props) {
    return (
        <div className="player-box">
            <h3>{player.name}</h3>
            <h3>Buttons: {player.buttons}</h3>
            <h3>Score: {player.score}</h3>
        </div>
    )
}