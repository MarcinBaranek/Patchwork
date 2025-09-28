// src/data/patches.ts
import {Patch} from '../models/types'
import {shuffle} from "../utils/random";
import {
    default_button_square,
    default_square, wildPatch
} from "../components/patchesStyles";


export const PATCHES: Patch[] = shuffle([
    {
        id: 'p1',
        name: 'Long-cross',
        width: 5,
        height: 3,
        shape: [
            {x: 0, y: 1},
            {x: 1, y: 1},
            {x: 2, y: 0},
            {x: 2, y: 1},
            {x: 2, y: 2},
            {x: 3, y: 1},
            {x: 4, y: 1}
        ],
        cost_in_buttons: 1,
        income_buttons: 1,
        cost_in_squares: 4,
        colors: (idx: number) => {
            if (idx === 0) {
                return default_button_square("p1")
            }
            return default_square("p1")
            // return "#88bcee"
        },
        buttons_squares: [0]
    },
    {
        id: 'p2',
        name: 'cross',
        width: 4,
        height: 3,
        shape: [
            {x: 0, y: 1},
            {x: 1, y: 1},
            {x: 2, y: 0},
            {x: 2, y: 1},
            {x: 2, y: 2},
            {x: 3, y: 1}
        ],
        cost_in_buttons: 0,
        income_buttons: 1,
        cost_in_squares: 3,
        colors: (idx: number) => {
            if (idx === 0) {
                return default_button_square("p2")
            }
            return default_square("p2")
        },
        buttons_squares: [0]
    },
    {
        id: 'p3',
        name: 'H',
        width: 3,
        height: 3,
        shape: [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 0, y: 2},
            {x: 1, y: 1},
            {x: 2, y: 0},
            {x: 2, y: 1},
            {x: 2, y: 2}
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 3,
        colors: (idx: number) => {
            return default_square("p3")
        },
        buttons_squares: []
    },
    {
        id: 'p4',
        name: 'Big-C',
        width: 2,
        height: 4,
        shape: [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 0, y: 2},
            {x: 0, y: 3},
            {x: 1, y: 3},
            {x: 1, y: 0},
        ],
        cost_in_buttons: 1,
        income_buttons: 1,
        cost_in_squares: 5,
        colors: (idx: number) => {
            if (idx === 0) {
                return default_button_square("p4")
            }
            return default_square("p4")
        },
        buttons_squares: [0]
    },
    {
        id: 'p5',
        name: 'Fat-cross',
        width: 4,
        height: 3,
        shape: [
            {x: 0, y: 1},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 1, y: 2},
            {x: 2, y: 0},
            {x: 2, y: 1},
            {x: 2, y: 2},
            {x: 3, y: 1},
        ],
        cost_in_buttons: 5,
        income_buttons: 1,
        cost_in_squares: 3,
        colors: (idx: number) => {
            if (idx === 0) {
                return default_button_square("p5")
            }
            return default_square("p5")
        },
        buttons_squares: [0]
    },
    {
        id: 'p6',
        name: 'Long-Z',
        width: 4,
        height: 3,
        shape: [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 1, y: 1},
            {x: 2, y: 1},
            {x: 3, y: 1},
            {x: 3, y: 2},
        ],
        cost_in_buttons: 1,
        income_buttons: 0,
        cost_in_squares: 2,
        colors: (idx: number) => {
            return default_square("p6")
        },
        buttons_squares: []
    },
    {
        id: 'p7',
        name: 'L',
        width: 3,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 2, y: 0},
            {x: 2, y: 1},
        ],
        cost_in_buttons: 4,
        income_buttons: 1,
        cost_in_squares: 2,
        colors: (idx: number) => {
            if (idx === 0) {
                return default_button_square("p7")
            }
            return default_square("p7")
        },
        buttons_squares: [0]
    },
    {
        id: 'p8',
        name: '3-squares',
        width: 3,
        height: 1,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 2, y: 0},
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 2,
        colors: (idx: number) => {
            return default_square("p8")
        },
        buttons_squares: []
    },
    {
        id: 'p9',
        name: '5-squares',
        width: 5,
        height: 1,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 2, y: 0},
            {x: 3, y: 0},
            {x: 4, y: 0},
        ],
        cost_in_buttons: 7,
        income_buttons: 1,
        cost_in_squares: 1,
        colors: (idx: number) => {
            if (idx === 0) {
                return default_button_square("p9")
            }
            return default_square("p9")
        },
        buttons_squares: [0]
    },
    {
        id: 'p10',
        name: 'corner',
        width: 2,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
        ],
        cost_in_buttons: 3,
        income_buttons: 0,
        cost_in_squares: 1,
        colors: (idx: number) => {
            return default_square("p10")
        },
        buttons_squares: []
    },
    {
        id: 'p11',
        name: 'freaky-cross',
        width: 4,
        height: 3,
        shape: [
            {x: 0, y: 1},
            {x: 1, y: 1},
            {x: 1, y: 2},
            {x: 2, y: 0},
            {x: 2, y: 1},
            {x: 3, y: 1},
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 1,
        colors: (idx: number) => {
            return default_square("p11")
        },
        buttons_squares: []
    },
    {
        id: 'p12',
        name: 'dron',
        width: 3,
        height: 3,
        shape: [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 1, y: 1},
            {x: 1, y: 2},
            {x: 2, y: 0},
            {x: 2, y: 1},
        ],
        cost_in_buttons: 3,
        income_buttons: 2,
        cost_in_squares: 6,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1) {
                return default_button_square("p12")
            }
            return default_square("p12")
        },
        buttons_squares: [0,1]
    },
    {
        id: 'p13',
        name: 'c',
        width: 3,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 1, y: 0},
            {x: 2, y: 0},
            {x: 2, y: 1},
        ],
        cost_in_buttons: 1,
        income_buttons: 0,
        cost_in_squares: 2,
        colors: (idx: number) => {
            return default_square("p13")
        },
        buttons_squares: []
    },
    {
        id: 'p14',
        name: 'extended-z',
        width: 4,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 1},
            {x: 3, y: 1},
        ],
        cost_in_buttons: 2,
        income_buttons: 1,
        cost_in_squares: 3,
        colors: (idx: number) => {
            if (idx === 0) {
                return default_button_square("p14")
            }
            return default_square("p14")
        },
        buttons_squares: [0]
    },
    {
        id: 'p15',
        name: 'Fat-z',
        width: 4,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 0},
            {x: 2, y: 1},
            {x: 3, y: 1},
        ],
        cost_in_buttons: 4,
        income_buttons: 0,
        cost_in_squares: 2,
        colors: (idx: number) => {
            return default_square("p15")
        },
        buttons_squares: []
    },
    {
        id: 'p16',
        name: 'Catted-Fat-z',
        width: 3,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 1},
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 2,
        colors: (idx: number) => {
            return default_square("p16")
        },
        buttons_squares: []
    },
    {
        id: 'p17',
        name: 'Broken-cross',
        width: 4,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 0},
            {x: 3, y: 0},
        ],
        cost_in_buttons: 3,
        income_buttons: 1,
        cost_in_squares: 4,
        colors: (idx: number) => {
            if (idx === 0) {
                return default_button_square("p17")
            }
            return default_square("p17")
        },
        buttons_squares: [0]
    },
    {
        id: 'p18',
        name: 'Fat-L',
        width: 4,
        height: 2,
        shape: [
            {x: 0, y: 1},
            {x: 1, y: 1},
            {x: 2, y: 0},
            {x: 2, y: 1},
            {x: 3, y: 0},
            {x: 3, y: 1},
        ],
        cost_in_buttons: 10,
        income_buttons: 3,
        cost_in_squares: 5,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1 || idx === 2) {
                return default_button_square("p18")
            }
            return default_square("p18")
        },
        buttons_squares: [0, 1, 2]
    },
    {
        id: 'p19',
        name: 'Square',
        width: 2,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 1, y: 0},
            {x: 1, y: 1},
        ],
        cost_in_buttons: 6,
        income_buttons: 2,
        cost_in_squares: 5,colors: (idx: number) => {
            if (idx === 0 || idx === 1) {
                return default_button_square("p19")
            }
            return default_square("p19")
        },
        buttons_squares: [0, 1]
    },
    {
        id: 'p21',
        name: 'small-broken-cross',
        width: 3,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 0},
        ],
        cost_in_buttons: 2,
        income_buttons: 0,
        cost_in_squares: 3,
        colors: (idx: number) => {
            return default_square("p21")
        },
        buttons_squares: []
    },
    {
        id: 'p22',
        name: 'High-T',
        width: 3,
        height: 4,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 1, y: 2},
            {x: 1, y: 3},
            {x: 2, y: 0},
        ],
        cost_in_buttons: 7,
        income_buttons: 2,
        cost_in_squares: 2,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1) {
                return default_button_square("p22")
            }
            return default_square("p22")
        },
        buttons_squares: [0, 1]
    },
    {
        id: 'p23',
        name: 'T',
        width: 3,
        height: 3,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 1, y: 2},
            {x: 2, y: 0},
        ],
        cost_in_buttons: 5,
        income_buttons: 2,
        cost_in_squares: 5,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1) {
                return default_button_square("p23")
            }
            return default_square("p23")
        },
        buttons_squares: [0, 1]
    },
    {
        id: 'p24',
        name: 'Mushroom',
        width: 4,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 0},
            {x: 2, y: 1},
            {x: 3, y: 0},
        ],
        cost_in_buttons: 7,
        income_buttons: 2,
        cost_in_squares: 4,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1) {
                return default_button_square("p24")
            }
            return default_square("p24")
        },
        buttons_squares: [0, 1]
    },
    {
        id: 'p25',
        name: 'cross',
        width: 3,
        height: 3,
        shape: [
            {x: 0, y: 1},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 1, y: 2},
            {x: 2, y: 1},
        ],
        cost_in_buttons: 5,
        income_buttons: 2,
        cost_in_squares: 4,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1) {
                return default_button_square("p25")
            }
            return default_square("p25")
        },
        buttons_squares: [0, 1]
    },
    {
        id: 'p26',
        name: '4-square',
        width: 4,
        height: 1,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 2, y: 0},
            {x: 3, y: 0},
        ],
        cost_in_buttons: 3,
        income_buttons: 1,
        cost_in_squares: 3,
        colors: (idx: number) => {
            if (idx === 0) {
                return default_button_square("p26")
            }
            return default_square("p26")
        },
        buttons_squares: [0]
    },
    {
        id: 'p27',
        name: 'z',
        width: 3,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 1},
        ],
        cost_in_buttons: 3,
        income_buttons: 1,
        cost_in_squares: 2,
        colors: (idx: number) => {
            if (idx === 0) {
                return default_button_square("p27")
            }
            return default_square("p27")
        },
        buttons_squares: [0]
    },
    {
        id: 'p28',
        name: 'corner-2',
        width: 2,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
        ],
        cost_in_buttons: 1,
        income_buttons: 0,
        cost_in_squares: 3,
        colors: (idx: number) => {
            return default_square("p28")
        },
        buttons_squares: []
    },
    {
        id: 'p29',
        name: 'High-Z',
        width: 3,
        height: 3,
        shape: [
            {x: 0, y: 1},
            {x: 0, y: 2},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 1, y: 2},
            {x: 2, y: 0},
        ],
        cost_in_buttons: 8,
        income_buttons: 3,
        cost_in_squares: 6,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1 || idx === 2) {
                return default_button_square("p29")
            }
            return default_square("p29")
        },
        buttons_squares: [0, 1, 2]
    },
    {
        id: 'p30',
        name: 'L-2',
        width: 3,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 2, y: 0},
            {x: 2, y: 1},
        ],
        cost_in_buttons: 4,
        income_buttons: 2,
        cost_in_squares: 6,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1) {
                return default_button_square("p30")
            }
            return default_square("p30")
        },
        buttons_squares: [0, 1]
    },
    {
        id: 'p31',
        name: 'Z-2',
        width: 3,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 1},
        ],
        cost_in_buttons: 7,
        income_buttons: 3,
        cost_in_squares: 6,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1 || idx === 2) {
                return default_button_square("p31")
            }
            return default_square("p31")
        },
        buttons_squares: [0, 1, 2]
    },
    {
        id: 'p32',
        name: 'W',
        width: 3,
        height: 3,
        shape: [
            {x: 0, y: 1},
            {x: 0, y: 2},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 0},
        ],
        cost_in_buttons: 10,
        income_buttons: 3,
        cost_in_squares: 4,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1 || idx === 2) {
                return default_button_square("p32")
            }
            return default_square("p32")
        },
        buttons_squares: [0, 1, 2]
    },
    {
        id: 'p33',
        name: 'High-L',
        width: 4,
        height: 2,
        shape: [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 1, y: 0},
            {x: 2, y: 0},
            {x: 3, y: 0},
        ],
        cost_in_buttons: 10,
        income_buttons: 2,
        cost_in_squares: 3,
        colors: (idx: number) => {
            if (idx === 0 || idx === 1) {
                return default_button_square("p33")
            }
            return default_square("p33")
        },
        buttons_squares: [0, 1]
    }
]).concat([{
    id: 'p20',
    name: '2-square',
    width: 2,
    height: 1,
    shape: [
        {x: 0, y: 0},
        {x: 1, y: 0}
    ],
    cost_in_buttons: 2,
    income_buttons: 0,
    cost_in_squares: 1,
    colors: (idx: number) => {
        return default_square("p20")
    },
    buttons_squares: []
}])


export function getWildPatch(): Patch {
    return {
        id: `wild-${Date.now()}`, // unikalne id
            name: 'Wild 1x1',
        shape: [{x: 0, y: 0}],             // 1x1 patch
        width: 1,
        height: 1,
        cost_in_buttons: 0,
        cost_in_squares: 0,
        income_buttons: 0,
        colors: (idx) => {
            if (idx > 10) {
                return "black" as string
            }
            return wildPatch()
        },
        // colors: ((idx) => {return default_square()}),
        buttons_squares: []
    }
}