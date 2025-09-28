import {PatchShape, Coord, Patch} from '../models/types'
import {JSX} from "react";


export function mirrorPatch(patch: Patch): Patch {
    return {
        ...patch,
        shape:  patch.shape.map(({x, y}) => ({ x: patch.width - 1 - x, y }))
    }
}

export function mirrorPatchVertically(patch: Patch): Patch {
    return {
        ...patch,
        shape:  patch.shape.map(({x, y}) => ({ x: x, y: patch.height - 1 - y }))
    }
}


export function rotatePatch(patch: Patch): Patch {
    return mirrorPatch({
        ...patch,
        width: patch.height,
        height: patch.width,
        shape:  patch.shape.map(({x, y}) => ({x:y, y: x}))
    })
}

/**
 * Compute absolute board coordinates for a patch placed with origin at originCoord.
 * Accounts for flip/rotate.
 */
export function computeAbsoluteCoords(
  shape: PatchShape,
  originCoord: Coord
): Coord[] {
  return shape.map(({ x, y }) => ({ x: originCoord.x + x, y: originCoord.y + y }))
}

/**
 * Check if a set of absolute coordinates fits on a grid of given size and does not collide.
 * @param coords absolute coords to place
 * @param board grid of GridCell[][] (row major with y index) - board[y][x]
 */
export function canPlace(coords: Coord[], board: (string | null | JSX.Element)[][]): boolean {
  for (const c of coords) {
    if (c.x < 0 || c.y < 0 || c.y >= board.length || c.x >= board[0].length) return false
    if (board[c.y][c.x] !== null) return false
  }
  return true
}