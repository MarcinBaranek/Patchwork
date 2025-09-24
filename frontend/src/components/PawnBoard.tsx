import React from 'react'

interface Props {
    gain: number
  onNext: () => void
}

/**
 * PawnBoard: shows which player's turn it is and provides a button to end the turn.
 */
export default function PawnBoard({ gain, onNext }: Props) {
  return (
    <div>
      <button
          onClick={onNext}
          style={{
              margin: "0.2rem",
              width: "100%",
              fontSize: "1rem",
              fontWeight: "bold",
      }}>Gain buttons ({gain})</button>
    </div>
  )
}