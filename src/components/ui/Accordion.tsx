import React, { useState, useEffect } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './Accordion.scss'

export interface AccordionItem {
    title: React.ReactNode
    content: React.ReactNode
}

interface AccordionProps {
    items: AccordionItem[]
    className?: string
    singleOpen?: boolean
    activeIndex?: number
    onToggle?: (index: number) => void
}

export function Accordion({
    items,
    className = '',
    singleOpen = false,
    activeIndex,
    onToggle
}: AccordionProps) {
    const [activeIndices, setActiveIndices] = useState<number[]>(activeIndex !== undefined ? [activeIndex] : [])

    // Update internal state when activeIndex prop changes
    useEffect(() => {
        if (activeIndex !== undefined) {
            setActiveIndices([activeIndex])
        }
    }, [activeIndex])

    const toggleAccordion = (index: number) => {
        if (onToggle) {
            onToggle(index)
        } else {
            if (singleOpen) {
                setActiveIndices(activeIndices.includes(index) ? [] : [index])
            } else {
                setActiveIndices((prev: number[]) =>
                    prev.includes(index)
                        ? prev.filter((i: number) => i !== index)
                        : [...prev, index]
                )
            }
        }
    }

    return (
        <div className={`accordion ${className}`}>
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <button
                        className="accordion-header"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndices.includes(index)}
                    >
                        <span>{item.title}</span>
                        {activeIndices.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <div
                        className={`accordion-content ${activeIndices.includes(index) ? 'active' : ''}`}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    )
} 