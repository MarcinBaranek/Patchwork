// src/components/PatchPalette.tsx

import React from 'react'
import PatchItem from './PatchItem'
import {Patch} from '../models/types'


interface Props {
    patches: Patch[]
    onSelect: (id: string) => void
    limit?: number
    skip?: number
}

export default function PatchPalette({
                                         patches,
                                         onSelect,
                                         limit,
                                        skip
                                     }: Props) {
    const text = limit? "Available patches" : "Next patches"

    const tmp_patches =
        limit?
            patches.slice(0, limit)
            : patches.slice(skip? skip: 3, undefined)
    return (
        <div className="palette"
            style={{
                alignItems: "center",
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h3>{text}</h3>
            <div className="patch-list"
                 style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                {
                    tmp_patches
                        .map((patch) => (
                            <PatchItem key={patch.id} patch={patch}
                                       onSelect={onSelect}/>
                        ))
                }
            </div>
        </div>
    )
}
