import styled from 'styled-components'

export const AccordionWrapper = styled.div`
    width: 100%;
`

export const AccordionItem = styled.div`
    &:not(:last-child) {
        margin-bottom: var(--size-3);
    }
`

export const AccordionHeader = styled.div`
    width: 100%;
    padding: var(--size-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: var(--link);
    }

    span {
        font-weight: var(--font-weight-5);
        color: var(--text-primary);
        text-align: left;
    }

    svg {
        color: var(--text-secondary);
        transition: transform 0.2s ease-in-out;
        flex-shrink: 0;
    }
`

export const AccordionContent = styled.div<{ $isOpen: boolean }>`
    max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '0')};
    overflow: hidden;
    padding: ${({ $isOpen }) => ($isOpen ? '0 var(--size-6) var(--size-6)' : '0 var(--size-6) 0')};
    transition: all ${({ $isOpen }) =>
        $isOpen ? '0.2s cubic-bezier(1, 0, 1, 0)' : '0.5s cubic-bezier(0, 1, 0, 1)'};
    color: var(--text-secondary);
    line-height: var(--font-lineheight-3);
`
