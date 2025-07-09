import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useTouchSwipe } from '../../../hooks/useTouchSwipe'
import {
    CarouselWrapper,
    CarouselContainer,
    Slide,
    SlideText,
    CarouselButton,
    Indicators,
    Indicator
} from './Carousel.styled'

export interface CarouselItem {
    image: string
    title?: string
    description?: string
}

interface Props {
    items: CarouselItem[]
    autoPlay?: boolean
    interval?: number
    pauseOnHover?: boolean
    slideHeight?: string
    showTextOverlay?: boolean
    textOverlayPosition?: 'top' | 'bottom'
    textOverlayBackground?: string
    textOverlayColor?: string
}

export function Carousel({
    items,
    autoPlay = true,
    interval = 5000,
    pauseOnHover = true,
    slideHeight = '400px',
    showTextOverlay = true,
    textOverlayPosition = 'bottom',
    textOverlayBackground = 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
    textOverlayColor = '#ffffff'
}: Props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(autoPlay)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        if (isPlaying && autoPlay) {
            intervalRef.current = setInterval(nextSlide, interval)
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [isPlaying, autoPlay, interval])

    useEffect(() => {
        const handleKeyDown = (ev: KeyboardEvent) => {
            if (ev.key === 'ArrowRight') nextSlide()
            if (ev.key === 'ArrowLeft') prevSlide()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const { onTouchStart, onTouchEnd } = useTouchSwipe({
        onSwipeLeft: nextSlide,
        onSwipeRight: prevSlide
    })

    if (!items || items.length === 0) return null

    return (
        <CarouselWrapper
            onMouseEnter={() => pauseOnHover && setIsPlaying(false)}
            onMouseLeave={() => pauseOnHover && setIsPlaying(true)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className='carousel'
        >
            <CarouselContainer style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                    <Slide key={index} height={slideHeight}>
                        <img src={item.image} alt={item.title || `Slide ${index + 1}`} />
                        {showTextOverlay && (item.title || item.description) && (
                            <SlideText
                                position={textOverlayPosition}
                                background={textOverlayBackground}
                                color={textOverlayColor}
                            >
                                {item.title && <div>{item.title}</div>}
                                {item.description && <div>{item.description}</div>}
                            </SlideText>
                        )}
                    </Slide>
                ))}
            </CarouselContainer>

            <CarouselButton position="left" onClick={prevSlide}>
                <FaChevronLeft />
            </CarouselButton>
            <CarouselButton position="right" onClick={nextSlide}>
                <FaChevronRight />
            </CarouselButton>

            <Indicators>
                {items.map((_, index) => (
                    <Indicator key={index} active={index === currentIndex} onClick={() => goToSlide(index)} />
                ))}
            </Indicators>
        </CarouselWrapper>
    )
} 