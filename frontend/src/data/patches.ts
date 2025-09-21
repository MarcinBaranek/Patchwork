// src/data/patches.ts
import { Patch } from '../models/types'

export const PATCHES: Patch[] = [
  {
    id: 'p1',
    name: 'L-Shape',
    width: 2,
    height: 3,
    shape: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 }
    ],
    cost_in_buttons: 2,
      income_buttons: 0,
      cost_in_squares: 3
  },
  {
    id: 'p2',
    name: 'Square',
    width: 2,
    height: 2,
    shape: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 }
    ],
    cost_in_buttons: 1,
      cost_in_squares: 2,
      income_buttons: 1
  },
  {
    id: 'p3',
    name: 'Line 3',
    width: 3,
    height: 1,
    shape: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 }
    ],
    cost_in_buttons: 1,
      cost_in_squares: 3,
      income_buttons: 2
  },
  {
    id: 'p4',
    name: 'Line 4',
    width: 1,
    height: 4,
    shape: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 }
    ],
    cost_in_buttons: 2,
      cost_in_squares: 3,
      income_buttons: 1
  },
  {
    id: 'p5',
    name: 'Z-Shape',
    width: 3,
    height: 2,
    shape: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 }
    ],
    cost_in_buttons: 3,
      cost_in_squares: 5,
      income_buttons: 3
  },
  {
    id: 'p6',
    name: 'T-Shape',
    width: 3,
    height: 2,
    shape: [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 }
    ],
    cost_in_buttons: 3,
      cost_in_squares: 1,
      income_buttons: 0
  },
  {
    id: 'p8',
    name: 'Corner',
    width: 2,
    height: 2,
    shape: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ],
    cost_in_buttons: 2,
      cost_in_squares: 3,
      income_buttons: 0
  }
]
