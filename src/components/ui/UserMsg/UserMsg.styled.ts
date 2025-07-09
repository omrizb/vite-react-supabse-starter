import styled, { css } from 'styled-components'

const typeColors = {
    success: {
        bg: 'var(--gray-9)',
        text: 'var(--gray-0)',
    },
    error: {
        bg: 'var(--gray-9)',
        text: 'var(--gray-0)',
    },
    info: {
        bg: 'var(--gray-7)',
        text: 'var(--gray-0)',
    },
    warning: {
        bg: 'var(--yellow-8)',
        text: 'var(--gray-0)',
    },
} as const

export const userMsgTypeStyles = (type: string) => {
    const { bg, text } = typeColors[type as keyof typeof typeColors] || typeColors.success
    return css`
        background-color: ${bg};
        border: 1px solid ${bg};
        color: ${text};
    `
}

export const UserMsgWrapper = styled.section<{ $type: string }>`
    position: fixed;
    bottom: 10%;
    left: 15%;
    display: flex;
    justify-content: space-between;
    min-width: 350px;
    padding: var(--size-6);
    border-radius: var(--radius-2);
    font-size: var(--font-size-3);
    box-shadow: var(--shadow-3);
    z-index: var(--layer-important);
    ${({ $type }) => userMsgTypeStyles($type)}
`

export const MsgText = styled.p`
    margin: 0;
    flex: 1;
`

export const CloseButton = styled.button`
    border: 1px solid transparent;
    border-radius: var(--radius-1);
    padding: var(--size-2) var(--size-4);
    font-weight: var(--font-weight-6);
    text-transform: uppercase;
    word-spacing: 0.3em;
    letter-spacing: 0.1em;
    color: var(--gray-0);
    background: transparent;
    cursor: pointer;
    transition: background-color var(--transition);

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`
