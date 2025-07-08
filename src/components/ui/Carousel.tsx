import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useTouchSwipe } from '../../hooks/useTouchSwipe'
import './Carousel.scss'

export interface CarouselItem {
    image: string
    title?: string
    description?: string
}

interface CarouselProps {
    items: CarouselItem[]
    autoPlay?: boolean
    interval?: number
    pauseOnHover?: boolean
    className?: string
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
    className = '',
    slideHeight = '400px',
    showTextOverlay = true,
    textOverlayPosition = 'bottom',
    textOverlayBackground = 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
    textOverlayColor = '#ffffff'
}: CarouselProps) {
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
        <div
            className={`carousel ${className}`}
            role="region"
            aria-label="Image Carousel"
            onMouseEnter={() => pauseOnHover && setIsPlaying(false)}
            onMouseLeave={() => pauseOnHover && setIsPlaying(true)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div
                className="carousel-container"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="carousel-slide"
                        style={{ height: slideHeight }}
                    >
                        <img src={item.image} alt={item.title || `Slide ${index + 1}`} />
                        {showTextOverlay && (item.title || item.description) && (
                            <div
                                className="slide-text"
                                style={{
                                    [textOverlayPosition]: 0,
                                    background: textOverlayBackground,
                                    color: textOverlayColor
                                }}
                            >
                                {item.title && <div className="slide-title">{item.title}</div>}
                                {item.description && <div className="slide-description">{item.description}</div>}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="carousel-button prev" onClick={prevSlide} aria-label="Previous slide">
                <FaChevronLeft />
            </div>
            <div className="carousel-button next" onClick={nextSlide} aria-label="Next slide">
                <FaChevronRight />
            </div>

            <div className="carousel-indicators">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
} 