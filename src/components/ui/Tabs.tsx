import { useState, type ReactNode } from 'react'
import './Tabs.scss'

interface Tab {
    label: ReactNode
    content: ReactNode
}

interface TabsProps {
    tabs: Tab[]
    defaultActiveTab?: number
    className?: string
}

export function Tabs({ tabs, defaultActiveTab = 0, className = '' }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultActiveTab)

    return (
        <div className={`tabs ${className}`}>
            <div className="tabs-header">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                        role="tab"
                        aria-selected={activeTab === index}
                        aria-controls={`tabpanel-${index}`}
                        id={`tab-${index}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tabs-content">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        id={`tabpanel-${index}`}
                        className={`tab-panel ${activeTab === index ? 'active' : ''}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${index}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    )
}
