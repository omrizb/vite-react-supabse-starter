import React, { useRef } from 'react'

interface UseTouchSwipeOptions {
    onSwipeLeft?: () => void
    onSwipeRight?: () => void
    threshold?: number
}

export function useTouchSwipe({
    onSwipeLeft,
    onSwipeRight,
    threshold = 50
}: UseTouchSwipeOptions) {
    const startX = useRef(0)
    const endX = useRef(0)

    const onTouchStart = (ev: React.TouchEvent) => {
        startX.current = ev.changedTouches[0].screenX
    }

    const onTouchEnd = (ev: React.TouchEvent) => {
        endX.current = ev.changedTouches[0].screenX
        const distance = startX.current - endX.current

        if (distance > threshold && onSwipeLeft) {
            onSwipeLeft()
        } else if (distance < -threshold && onSwipeRight) {
            onSwipeRight()
        }
    }

    return {
        onTouchStart,
        onTouchEnd
    }
} 