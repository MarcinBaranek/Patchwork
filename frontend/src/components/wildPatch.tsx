// WildPatchModal.jsx

import {Patch} from "../models/types";

interface Props {
    isOpen: boolean
    onConfirm?: () => void
}

export default function WildPatchModal({ isOpen, onConfirm }: Props) {
    if (!isOpen) return null; // don't render if not open

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            Modal
            {/* Modal content */}
            <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-md w-full z-60">
                <h2 className="text-xl font-bold mb-4">Place the Wild Patch</h2>
                <p className="mb-6">You crossed a wild patch! Place it on your board before continuing.</p>
                <button
                    onClick={onConfirm}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Done
                </button>
            </div>
        </div>
    );
}
