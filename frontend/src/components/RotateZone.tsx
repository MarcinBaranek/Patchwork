import React, {ReactNode} from 'react'
import { useDrop } from 'react-dnd'
import { Patch } from '../models/types'

interface Props {
    setPatches: React.Dispatch<React.SetStateAction<Patch[]>>
    rotateCallback: (patch: Patch) => Patch
    icon: () => ReactNode
}

export default function FlipDropZone({ setPatches, rotateCallback, icon }: Props) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'PATCH',
        drop: (item: { id: string }) => {
            setPatches(prev =>
                prev.map(p => p.id === item.id ? rotateCallback(p) : p)
            )
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    return (
        <div
            ref={drop}
            style={{
                width: 50,
                height: 50,
                borderRadius: 8,
                border: '2px dashed #444',
                background: isOver ? 'rgba(0,200,0,0.3)' : '#fafafa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }}
        >
            {icon()}
        </div>
    )
}
