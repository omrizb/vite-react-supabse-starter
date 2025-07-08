import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'
import { showTooltip } from '../../services/event-bus.service'

interface TooltipContainerProps {
    txt: string
    children: ReactNode
    screenMargin?: number
}

export function TooltipContainer({
    txt,
    children,
    screenMargin = 10,
}: TooltipContainerProps) {
    const timeOutId = useRef<NodeJS.Timeout | null>(null)
    const tooltipRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    const minX = screenMargin
    const maxX = window.innerWidth - screenMargin
    const minY = screenMargin

    useEffect(() => {
        if (!tooltipRef.current || !containerRef.current) return

        const xOffset = getHorizontalOffset()
        const yOffset = getVerticalOffset()

        const style: CSSProperties = {
            ...xOffset,
            ...yOffset,
            opacity: 1,
        }

        showTooltip({
            isVisible,
            txt,
            style,
        })
    }, [isVisible])

    function getHorizontalOffset(): CSSProperties {
        if (!containerRef.current || !tooltipRef.current) return {}

        const containerRect = containerRef.current.getBoundingClientRect()
        const containerWidth = containerRef.current.offsetWidth
        const tooltipWidth = tooltipRef.current.offsetWidth

        const leftOffset = (containerWidth - tooltipWidth) / 2
        const proposedLeft = containerRect.x + leftOffset

        if (proposedLeft < minX) {
            return { left: `${proposedLeft}px` }
        } else if (proposedLeft + tooltipWidth > maxX) {
            return { right: screenMargin }
        } else {
            return { left: `${proposedLeft}px` }
        }
    }

    function getVerticalOffset(): CSSProperties {
        if (!containerRef.current || !tooltipRef.current) return {}

        const containerRect = containerRef.current.getBoundingClientRect()
        const tooltipHeight = tooltipRef.current.offsetHeight

        if (containerRect.y - tooltipHeight > minY) {
            return { top: `${containerRect.y - tooltipHeight - 10}px` }
        } else {
            return { top: `${containerRect.y + tooltipHeight + 30}px` }
        }
    }

    function handleMouseEnter() {
        timeOutId.current = setTimeout(() => setIsVisible(true), 800)
    }

    function handleMouseLeave() {
        if (timeOutId.current) {
            clearTimeout(timeOutId.current)
        }
        setIsVisible(false)
    }

    return (
        <div
            ref={containerRef}
            className="tooltip-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <div
                ref={tooltipRef}
                className="tooltip-ref"
                style={{ visibility: 'hidden' }}
            >
                {txt}
            </div>
        </div>
    )
}
