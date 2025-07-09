import { useState, type ReactNode } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import {
    AccordionWrapper,
    AccordionItem,
    AccordionHeader,
    AccordionContent
} from './Accordion.styled'


export interface AccordionItem {
    title: string
    content: ReactNode
}

interface Props {
    items: AccordionItem[]
    singleOpen?: boolean
    activeIndex?: number
}

export function Accordion({
    items,
    singleOpen = false,
    activeIndex,
}: Props) {
    const [activeIndices, setActiveIndices] = useState<number[]>(activeIndex !== undefined ? [activeIndex] : [])

    const toggleAccordion = (index: number) => {
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

    return (
        <AccordionWrapper className='accordion'>
            {items.map((item, index) => {
                const isOpen = activeIndices.includes(index)
                return (
                    <AccordionItem key={index}>
                        <AccordionHeader
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={isOpen}
                        >
                            <span>{item.title}</span>
                            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </AccordionHeader>
                        <AccordionContent $isOpen={isOpen}>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </AccordionWrapper>
    )
} 