import { useEffect, useState, type ReactNode, type CSSProperties } from 'react'
import { useOutletContext } from 'react-router-dom'
import { HeaderFixerContainer, HeaderBackground, HeaderElement } from './HeaderFixer.styled'

interface Props {
    header: ReactNode
    className?: string
    bgColor?: string
    showFromY?: number
    children?: ReactNode
}

interface OutletContext {
    containerRef: React.RefObject<HTMLDivElement>
}

export function HeaderFixer({
    header,
    className,
    bgColor,
    showFromY = -1,
    children,
}: Props) {
    const OPACITY_SCALE = 80
    const { containerRef: scrollableContainerRef } = useOutletContext<OutletContext>()

    const [width, setWidth] = useState(0)
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        if (!scrollableContainerRef.current) return

        updateWidth()
        const resizeObserver = new ResizeObserver(updateWidth)
        resizeObserver.observe(scrollableContainerRef.current)

        handleScroll()
        scrollableContainerRef.current.addEventListener('scroll', handleScroll)

        return () => {
            resizeObserver.disconnect()
            scrollableContainerRef.current?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function updateWidth() {
        if (scrollableContainerRef.current) {
            const containerWidth = scrollableContainerRef.current.getBoundingClientRect().width
            setWidth(containerWidth)
        }
    }

    function handleScroll() {
        if (!scrollableContainerRef.current) return
        const scrollY = scrollableContainerRef.current.scrollTop
        if (scrollY >= showFromY) {
            const newOpacity =
                scrollY - showFromY < OPACITY_SCALE
                    ? (scrollY - showFromY) / OPACITY_SCALE
                    : 1
            setOpacity(newOpacity)
        } else {
            setOpacity(0)
        }
    }

    const dynamicStyle: CSSProperties = {
        width,
        opacity,
        zIndex: opacity ? 1000 : 0,
    }

    return (
        <>
            <HeaderFixerContainer>
                <HeaderBackground
                    className={className}
                    style={{ ...dynamicStyle, backgroundColor: bgColor }}
                />
                <HeaderElement
                    className={className}
                    style={{ ...dynamicStyle, opacity: opacity ? 1 : 0 }}
                >
                    {header}
                </HeaderElement>
            </HeaderFixerContainer>
            {children}
        </>
    )
}
