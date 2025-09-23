import {PlayerState, Patch} from "../models/types";


export function computeIncome(player: PlayerState, allPatches: Patch[]): number {
    // znajdź wszystkie patche, które ten gracz ma na planszy
    const placedPatchIds = new Set(player.board.flat().filter(Boolean) as string[])
    return allPatches
        .filter((p) => placedPatchIds.has(p.id))
        .reduce((sum, p) => sum + p.income_buttons, 0)
}
