import React, { useState, useRef, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './Dropdown.scss'

interface DropdownProps {
    trigger: React.ReactNode
    children: React.ReactNode
    position?: 'top' | 'bottom' | 'left' | 'right'
    className?: string
    onOpen?: () => void
    onClose?: () => void
}

export function Dropdown({
    trigger,
    children,
    position = 'bottom',
    className = '',
    onOpen,
    onClose
}: DropdownProps) {

    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
        if (isOpen) {
            onClose?.()
        } else {
            onOpen?.()
        }
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false)
            onClose?.()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div
            ref={dropdownRef}
            className={`dropdown ${className} ${position}`}
        >
            <div
                className="dropdown-trigger"
                onClick={toggleDropdown}
                role="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {trigger}
                <FaChevronDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
            </div>

            {isOpen && (
                <div className="dropdown-content">
                    {children}
                </div>
            )}
        </div>
    )
} 