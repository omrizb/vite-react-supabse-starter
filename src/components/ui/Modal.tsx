import React from 'react'
import './Modal.scss'

interface ModalProps {
    children: React.ReactNode
    closeModal: () => void
}

export function Modal({ children, closeModal }: ModalProps) {
    return (
        <div className="modal">
            <div className="modal-backdrop" onClick={closeModal}>
                <div className="modal-content" onClick={(ev) => ev.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
} 