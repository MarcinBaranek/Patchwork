import React from 'react'

interface Props {
  currentPlayer: string
  onNext: () => void
}

/**
 * PawnBoard: shows which player's turn it is and provides a button to end the turn.
 */
export default function PawnBoard({ currentPlayer, onNext }: Props) {
  return (
    <div className="pawn-board">
      <div className="pawn-info">Current Player: {currentPlayer}</div>
      <button onClick={onNext}>End Turn</button>
    </div>
  )
}