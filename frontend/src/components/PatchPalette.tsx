// src/components/PatchPalette.tsx

import React from 'react'
import {useDrag} from 'react-dnd'
import PatchItem from './PatchItem'
import {Patch} from '../models/types'


interface Props {
    patches: Patch[]
    onSelect: (id: string) => void
    pawnIndex: number
    limit?: number
}

export default function PatchPalette({
                                         patches,
                                         onSelect,
                                         pawnIndex,
                                         limit
                                     }: Props) {
    const text = limit? "Available patches" : "Next patches"
    return (
        <div className="palette">
            <h3>{text}</h3>
            <div className="patch-list"
                 style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                {
                    patches
                        .slice(pawnIndex, limit? pawnIndex + limit : undefined)
                        .map((patch) => (
                            <PatchItem key={patch.id} patch={patch}
                                       onSelect={onSelect}/>
                        ))
                }
            </div>
        </div>
    )
}
