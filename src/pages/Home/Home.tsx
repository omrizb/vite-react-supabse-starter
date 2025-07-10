import { Accordion, type AccordionItem } from '../../components/ui/Accordion'
import { Carousel, type CarouselItem } from '../../components/ui/Carousel'
import {
    HomeWrapper,
    Hero,
    HeroTitle,
    HeroSubtitle,
    Showcase,
    ShowcaseHeading,
    ComponentsGrid,
    ComponentDemo,
    Features,
    FeaturesHeading,
    FeaturesGrid,
    FeatureCard
} from './Home.styled'

export function Home() {
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
        <HomeWrapper>
            <Hero>
                <HeroTitle>React UI Components Starter</HeroTitle>
                <HeroSubtitle>
                    A collection of modern, reusable UI components built with React and SCSS
                </HeroSubtitle>
            </Hero>

            <Showcase>
                <ShowcaseHeading>Featured Components</ShowcaseHeading>
                <ComponentsGrid>
                    <ComponentDemo>
                        <h3>Accordion Component</h3>
                        <Accordion items={accordionItems} />
                    </ComponentDemo>
                    <ComponentDemo>
                        <h3>Carousel Component</h3>
                        <Carousel items={carouselItems} />
                    </ComponentDemo>
                </ComponentsGrid>
            </Showcase>

            <Features>
                <FeaturesHeading>Key Features</FeaturesHeading>
                <FeaturesGrid>
                    <FeatureCard>
                        <h3>Customizable</h3>
                        <p>All components can be easily customized through props and SCSS variables</p>
                    </FeatureCard>
                    <FeatureCard>
                        <h3>Responsive</h3>
                        <p>Built with mobile-first approach and responsive design principles</p>
                    </FeatureCard>
                    <FeatureCard>
                        <h3>Accessible</h3>
                        <p>Follows accessibility best practices and WCAG guidelines</p>
                    </FeatureCard>
                </FeaturesGrid>
            </Features>
        </HomeWrapper>
    )
}
