import { useEffect, useState, type ReactNode, type CSSProperties } from 'react'
import { useOutletContext } from 'react-router-dom'

interface HeaderFixerProps {
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
}: HeaderFixerProps) {
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
            let newOpacity: number
            if (scrollY - showFromY < OPACITY_SCALE) {
                newOpacity = (scrollY - showFromY) / OPACITY_SCALE
            } else {
                newOpacity = 1
            }
            setOpacity(newOpacity)
        } else {
            setOpacity(0)
        }
    }

    const style: CSSProperties = {
        width,
        opacity,
        zIndex: opacity ? 1000 : 0,
    }

    return (
        <>
            <div className="header-fixer">
                <div
                    className={`background ${className || ''}`}
                    style={{ ...style, backgroundColor: bgColor }}
                ></div>
                <header className={className} style={{ ...style, opacity: opacity ? 1 : 0 }}>
                    {header}
                </header>
            </div>
            {children}
        </>
    )
}
