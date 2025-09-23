// src/data/patches.ts
import { Patch } from '../models/types'
import {shuffle} from "../utils/random";

export const PATCHES: Patch[] = shuffle([
  {
    id: 'p1',
    name: 'Long-cross',
    width: 5,
    height: 3,
    shape: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 1 },
      { x: 4, y: 1 }
    ],
    cost_in_buttons: 1,
      income_buttons: 1,
      cost_in_squares: 4
  },
    {
        id: 'p2',
        name: 'cross',
        width: 4,
        height: 3,
        shape: [
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 1 }
        ],
        cost_in_buttons: 0,
        income_buttons: 1,
        cost_in_squares: 3
    },
    {
        id: 'p3',
        name: 'H',
        width: 3,
        height: 3,
        shape: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 1 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 }
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 3
    },
    {
        id: 'p4',
        name: 'Big-C',
        width: 2,
        height: 4,
        shape: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 },
            { x: 1, y: 3 },
            { x: 1, y: 0 },
        ],
        cost_in_buttons: 1,
        income_buttons: 1,
        cost_in_squares: 5
    },
    {
        id: 'p5',
        name: 'Fat-cross',
        width: 4,
        height: 3,
        shape: [
            { x: 0, y: 1 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 1 },
        ],
        cost_in_buttons: 5,
        income_buttons: 1,
        cost_in_squares: 3
    },
    {
        id: 'p6',
        name: 'Long-Z',
        width: 4,
        height: 3,
        shape: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
            { x: 3, y: 2 },
        ],
        cost_in_buttons: 1,
        income_buttons: 0,
        cost_in_squares: 2
    },
    {
        id: 'p7',
        name: 'L',
        width: 3,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
        ],
        cost_in_buttons: 4,
        income_buttons: 1,
        cost_in_squares: 2
    },
    {
        id: 'p8',
        name: '3-squares',
        width: 3,
        height: 1,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 2
    },
    {
        id: 'p9',
        name: '5-squares',
        width: 5,
        height: 1,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
            { x: 4, y: 0 },
        ],
        cost_in_buttons: 7,
        income_buttons: 1,
        cost_in_squares: 1
    },
    {
        id: 'p10',
        name: 'corner',
        width: 2,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
        ],
        cost_in_buttons: 3,
        income_buttons: 0,
        cost_in_squares: 1
    },
    {
        id: 'p11',
        name: 'freaky-cross',
        width: 4,
        height: 3,
        shape: [
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 1
    },
    {
        id: 'p12',
        name: 'dron',
        width: 3,
        height: 3,
        shape: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
        ],
        cost_in_buttons: 3,
        income_buttons: 2,
        cost_in_squares: 6
    },
    {
        id: 'p13',
        name: 'c',
        width: 3,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
        ],
        cost_in_buttons: 1,
        income_buttons: 0,
        cost_in_squares: 2
    },
    {
        id: 'p14',
        name: 'extended-z',
        width: 4,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
        ],
        cost_in_buttons: 2,
        income_buttons: 1,
        cost_in_squares: 3
    },
    {
        id: 'p15',
        name: 'Fat-z',
        width: 4,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
        ],
        cost_in_buttons: 4,
        income_buttons: 0,
        cost_in_squares: 2
    },
    {
        id: 'p16',
        name: 'Catted-Fat-z',
        width: 3,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 2
    },
    {
        id: 'p17',
        name: 'Broken-cross',
        width: 4,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
        ],
        cost_in_buttons: 3,
        income_buttons: 1,
        cost_in_squares: 4
    },
    {
        id: 'p18',
        name: 'Fat-L',
        width: 4,
        height: 2,
        shape: [
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 3, y: 0 },
            { x: 3, y: 1 },
        ],
        cost_in_buttons: 10,
        income_buttons: 3,
        cost_in_squares: 5
    },
    {
        id: 'p19',
        name: 'Square',
        width: 2,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
        ],
        cost_in_buttons: 6,
        income_buttons: 2,
        cost_in_squares: 5
    },
    {
        id: 'p20',
        name: '2-square',
        width: 2,
        height: 1,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 }
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 1
    },
    {
        id: 'p21',
        name: 'small-broken-cross',
        width: 3,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 0 },
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 3
    },
    {
        id: 'p22',
        name: 'High-T',
        width: 3,
        height: 4,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 2, y: 0 },
        ],
        cost_in_buttons: 7,
        income_buttons: 2,
        cost_in_squares: 2
    },
    {
        id: 'p23',
        name: 'T',
        width: 3,
        height: 3,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 0 },
        ],
        cost_in_buttons: 5,
        income_buttons: 2,
        cost_in_squares: 5
    },
    {
        id: 'p24',
        name: 'Mushroom',
        width: 4,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 3, y: 0 },
        ],
        cost_in_buttons: 7,
        income_buttons: 2,
        cost_in_squares: 4
    },
    {
        id: 'p25',
        name: 'cross',
        width: 3,
        height: 3,
        shape: [
            { x: 0, y: 1 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 1 },
        ],
        cost_in_buttons: 5,
        income_buttons: 2,
        cost_in_squares: 4
    },
    {
        id: 'p26',
        name: '4-square',
        width: 4,
        height: 1,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
        ],
        cost_in_buttons: 3,
        income_buttons: 1,
        cost_in_squares: 3
    },
    {
        id: 'p27',
        name: 'z',
        width: 3,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
        ],
        cost_in_buttons: 3,
        income_buttons: 1,
        cost_in_squares: 2
    },
    {
        id: 'p28',
        name: 'corner-2',
        width: 2,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
        ],
        cost_in_buttons: 1,
        income_buttons: 0,
        cost_in_squares: 3
    },
    {
        id: 'p29',
        name: 'High-Z',
        width: 3,
        height: 3,
        shape: [
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 0 },
        ],
        cost_in_buttons: 8,
        income_buttons: 3,
        cost_in_squares: 6
    },
    {
        id: 'p30',
        name: 'L-2',
        width: 3,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
        ],
        cost_in_buttons: 4,
        income_buttons: 2,
        cost_in_squares: 6
    },
    {
        id: 'p31',
        name: 'Z-2',
        width: 3,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
        ],
        cost_in_buttons: 7,
        income_buttons: 3,
        cost_in_squares: 6
    },
    {
        id: 'p32',
        name: 'W',
        width: 3,
        height: 3,
        shape: [
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 0 },
        ],
        cost_in_buttons: 10,
        income_buttons: 3,
        cost_in_squares: 4
    },
    {
        id: 'p33',
        name: 'High-L',
        width: 4,
        height: 2,
        shape: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
        ],
        cost_in_buttons: 10,
        income_buttons: 2,
        cost_in_squares: 3
    }
])
