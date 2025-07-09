import styled from 'styled-components'

export const ModalWrapper = styled.div``

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: var(--z-index-modal);
`

export const ModalContent = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    border-radius: var(--radius-2);
    max-width: 50%;
    max-height: 50%;
    background-color: var(--surface-1);
    box-shadow: var(--shadow-4);
    overflow: auto;
`
