import { type ReactNode } from 'react'
import {
    ModalWrapper,
    ModalBackdrop,
    ModalContent,
} from './Modal.styled'

interface Props {
    children: ReactNode
    closeModal: () => void
}

export function Modal({ children, closeModal }: Props) {
    return (
        <ModalWrapper>
            <ModalBackdrop onClick={closeModal}>
                <ModalContent onClick={(ev) => ev.stopPropagation()}>
                    {children}
                </ModalContent>
            </ModalBackdrop>
        </ModalWrapper>
    )
}
