import styled from 'styled-components'

export const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    min-width: 40px;
    height: 12px;

    & > * {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }

    &:hover .active-bar,
    &:active .active-bar {
        background-color: var(--primary);
    }
`

export const NonActiveBar = styled.div`
    width: 100%;
    height: 4px;
    border-radius: var(--radius-round);
    background-color: var(--gray-4);
`

export const ActiveBar = styled.div`
    height: 4px;
    border-radius: var(--radius-round);
    background-color: var(--white);
    transition: background-color var(--transition-normal);
`

export const Pointer = styled.div`
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: var(--radius-round);
    background-color: var(--white);
    cursor: pointer;
`
