import styled from 'styled-components'

export const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: var(--radius-2);
`

export const CarouselContainer = styled.div`
    display: flex;
    transition: transform var(--transition-smooth);
`

export const Slide = styled.div<{ height: string }>`
    min-width: 100%;
    height: ${({ height }) => height};
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const SlideText = styled.div<{
    position: 'top' | 'bottom';
    background: string;
    color: string;
}>`
    position: absolute;
    ${({ position }) => `${position}: 0;`}
    left: 0;
    right: 0;
    padding: var(--size-8) var(--size-3);
    background: ${({ background }) => background};
    color: ${({ color }) => color};
`

export const CarouselButton = styled.button<{ position: 'left' | 'right' }>`
    position: absolute;
    top: 50%;
    ${({ position }) => `${position}: var(--size-3);`}
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: var(--radius-round);
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    transition: all var(--transition-normal);

    &:hover {
        background: rgba(0, 0, 0, 0.8);
    }
`

export const Indicators = styled.div`
    position: absolute;
    bottom: var(--size-4);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: var(--size-2);
`

export const Indicator = styled.div<{ active: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: var(--radius-round);
    background: ${({ active }) => (active ? 'white' : 'rgba(255,255,255,0.5)')};
    cursor: pointer;
    transition: background-color var(--transition-normal);

    &:hover {
        background: rgba(255, 255, 255, 0.7);
    }
`
