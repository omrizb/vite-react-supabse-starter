import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const LoginPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: var(--gray-1);
    padding: var(--size-4);
`

export const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: var(--size-8);
    border-radius: var(--radius-3);
    box-shadow: var(--shadow-5);
    max-width: 480px;
    width: 100%;
    min-height: 400px;

    h1 {
        margin-bottom: var(--size-4);
        font-size: var(--font-size-6);
        font-weight: var(--font-weight-6);
        color: var(--gray-9);
    }

    p {
        font-size: var(--font-size-3);
        color: var(--gray-6);
        margin-bottom: var(--size-6);
    }
`

export const ButtonContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--size-4);
    width: 100%;
`

export const GoogleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--size-2);
    width: 100%;
    max-width: 300px;
    padding: var(--size-3);
    background: white;
    border: 1px solid var(--gray-3);
    border-radius: var(--radius-3);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-5);
    color: var(--gray-8);
    cursor: pointer;
    transition: background 0.5s;

    svg {
        flex-shrink: 0;
    }

    &:hover {
        background: var(--gray-2);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
`

export const BackButton = styled.button`
    width: 100%;
    max-width: 300px;
    padding: var(--size-3);
    background: transparent;
    border: 1px solid var(--gray-3);
    border-radius: var(--radius-3);
    font-size: var(--font-size-2);
    color: var(--gray-8);
    font-weight: var(--font-weight-5);
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: var(--gray-1);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
`

export const SpinnerIcon = styled.div`
    animation: ${spin} 1s linear infinite;
`
