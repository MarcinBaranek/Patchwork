/**
 * Core types used across the project.
 */

/** A coordinate on a grid */
export type Coord = { x: number; y: number }

/** A patch tile coordinate relative to its patch origin */
export type PatchShape = Coord[]

export interface Patch {
  id: string
  name: string
  shape: PatchShape
  cost_in_buttons: number
    cost_in_squares: number
    income_buttons: number
  width: number
  height: number
}

export type GridCell = string | null // patch id or null

export interface PlayerState {
  id: number
  name: string
  board: GridCell[][]
  buttons: number
  score: number
    total_squares: number
}
