import { useEffect, useRef, useState } from 'react'
import { SliderWrapper, NonActiveBar, ActiveBar, Pointer } from './Slider.styled'

interface Props {
    value?: number
    min?: number
    max?: number
    setOnMouseup?: boolean
    onChange?: (value: number) => void
}

export function Slider({
    value = 50,
    min = 0,
    max = 100,
    setOnMouseup = false,
    onChange,
}: Props) {
    const nonActiveBarRef = useRef<HTMLDivElement | null>(null)
    const pointerRef = useRef<HTMLDivElement | null>(null)

    const [sliderWidth, setSliderWidth] = useState<number | null>(null)
    const [sliderValue, setSliderValue] = useState<number>(value)
    const [pointerOffset, setPointerOffset] = useState<number | null>(null)
    const [isDragging, setIsDragging] = useState(false)

    useEffect(() => {
        if (!nonActiveBarRef.current || !pointerRef.current) return
        updateWidth()
        const resizeObserver = new ResizeObserver(updateWidth)
        resizeObserver.observe(nonActiveBarRef.current)
        return () => resizeObserver.disconnect()
    }, [])

    useEffect(() => {
        if (sliderWidth !== null) {
            onSetPointerOffset(sliderValue)
        }
    }, [sliderWidth])

    useEffect(() => {
        if (!isDragging) {
            onSetPointerOffset(value)
        }
    }, [value])

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mouseup', handleMouseUp)
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging])

    useEffect(() => {
        if (!onChange) return
        if (!setOnMouseup) {
            onChange(sliderValue)
        }
    }, [sliderValue])

    function updateWidth() {
        if (!nonActiveBarRef.current || !pointerRef.current) return
        const nonActiveBarWidth = nonActiveBarRef.current.offsetWidth
        const pointerWidth = pointerRef.current.offsetWidth
        setSliderWidth(nonActiveBarWidth - pointerWidth)
    }

    function onSetPointerOffset(value: number) {
        if (sliderWidth === null) return
        const newOffset = (sliderWidth * (value - min)) / (max - min)

        if (newOffset > sliderWidth) {
            setSliderValue(max)
            setPointerOffset(sliderWidth)
        } else if (newOffset < 0 || isNaN(newOffset)) {
            setSliderValue(min)
            setPointerOffset(0)
        } else {
            setSliderValue(value)
            setPointerOffset(newOffset)
        }
    }

    function calcNewValue(ev: MouseEvent): number {
        if (!nonActiveBarRef.current || sliderWidth === null) return min
        const sliderRect = nonActiveBarRef.current.getBoundingClientRect()
        const pointerXOffset = ev.clientX - sliderRect.left
        return min + (pointerXOffset / sliderWidth) * (max - min)
    }

    function handleMouseDown(ev: React.MouseEvent) {
        ev.preventDefault()
        const newValue = calcNewValue(ev.nativeEvent)
        onSetPointerOffset(newValue)
        setIsDragging(true)
    }

    function handleMouseMove(ev: MouseEvent) {
        ev.preventDefault()
        const newValue = calcNewValue(ev)
        onSetPointerOffset(newValue)
    }

    function handleMouseUp(ev: MouseEvent) {
        ev.preventDefault()
        setIsDragging(false)
        if (setOnMouseup && onChange) {
            const finalValue = calcNewValue(ev)
            onSetPointerOffset(finalValue)
            setSliderValue(finalValue)
            onChange(finalValue)
        }
    }

    return (
        <SliderWrapper onMouseDown={handleMouseDown}>
            <NonActiveBar ref={nonActiveBarRef} />
            <ActiveBar className="active-bar" style={{ width: pointerOffset ?? 0 }} />
            <Pointer ref={pointerRef} style={{ left: pointerOffset ?? 0 }} />
        </SliderWrapper>
    )
}
