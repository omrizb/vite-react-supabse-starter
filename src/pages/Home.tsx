import { useState } from 'react'

import { Accordion, type AccordionItem } from '../components/ui/Accordion'
import { Carousel, type CarouselItem } from '../components/ui/Carousel'

import './Home.scss'

export function Home() {
    const [activeAccordion, setActiveAccordion] = useState(0)

    const accordionItems: AccordionItem[] = [
        {
            title: 'What is this starter kit?',
            content:
                'This is a modern React starter kit built with Vite, featuring a collection of reusable UI components. It includes components like Accordion, Carousel, and more, all styled with SCSS and following best practices.'
        },
        {
            title: 'How to use the components?',
            content:
                'Each component is designed to be easily customizable through props and SCSS variables. You can import them directly from the components/ui directory and use them in your pages.'
        },
        {
            title: 'Customization options',
            content:
                'The components use a theme system with variables defined in _theme.scss. You can customize colors, spacing, typography, and more by modifying these variables.'
        }
    ]

    const carouselItems: CarouselItem[] = [
        {
            image: 'https://picsum.photos/800/400?random=1',
            title: 'Modern UI Components',
            description: 'A collection of reusable, customizable components'
        },
        {
            image: 'https://picsum.photos/800/400?random=2',
            title: 'SCSS Styling',
            description: 'Clean and maintainable styles with SCSS'
        },
        {
            image: 'https://picsum.photos/800/400?random=3',
            title: 'Responsive Design',
            description: 'Components that work on all screen sizes'
        }
    ]

    return (
        <div className="home">
            <section className="hero">
                <h1>React UI Components Starter</h1>
                <p className="subtitle">
                    A collection of modern, reusable UI components built with React and SCSS
                </p>
            </section>

            <section className="showcase">
                <h2>Featured Components</h2>
                <div className="components-grid">
                    <div className="component-demo">
                        <h3>Accordion Component</h3>
                        <Accordion
                            items={accordionItems}
                            activeIndex={activeAccordion}
                            onToggle={setActiveAccordion}
                        />
                    </div>

                    <div className="component-demo">
                        <h3>Carousel Component</h3>
                        <Carousel items={carouselItems} />
                    </div>
                </div>
            </section>

            <section className="features">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature">
                        <h3>Customizable</h3>
                        <p>All components can be easily customized through props and SCSS variables</p>
                    </div>
                    <div className="feature">
                        <h3>Responsive</h3>
                        <p>Built with mobile-first approach and responsive design principles</p>
                    </div>
                    <div className="feature">
                        <h3>Accessible</h3>
                        <p>Follows accessibility best practices and WCAG guidelines</p>
                    </div>
                </div>
            </section>
        </div>
    )
} 