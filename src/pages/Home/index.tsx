import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { Accordion, type AccordionItem } from '../../components/ui/Accordion'
import { Carousel, type CarouselItem } from '../../components/ui/Carousel'


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

    const features = [
        { title: "Customizable", desc: "Easily customized through props..." },
        { title: "Responsive", desc: "Mobile-first approach..." },
        { title: "Accessible", desc: "Follows accessibility best practices..." },
    ]

    return (
        <Container maxW="6xl" py={8}>
            <Box textAlign="center" mb={10} py={8}>
                <Heading size="4xl" mb={4} color="heading">
                    React UI Components Starter
                </Heading>
                <Text fontSize="xl" color="gray.600" maxW="800px" mx="auto">
                    A collection of modern, reusable UI components...
                </Text>
            </Box>

            <Box mb={10}>
                <Heading size="2xl" textAlign="center" mb={6} color="gray.700">
                    Featured Components
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                    <Box bg="white" p={6} borderRadius="xl" boxShadow="lg">
                        <Heading mb={4}>Accordion Component</Heading>
                        <Accordion items={accordionItems} />
                    </Box>
                    <Box bg="white" p={6} borderRadius="xl" boxShadow="lg">
                        <Heading mb={4}>Carousel Component</Heading>
                        <Carousel items={carouselItems} />
                    </Box>
                </SimpleGrid>
            </Box>

            <Box mb={10}>
                <Heading size="2xl" textAlign="center" mb={6} color="gray.700">
                    Key Features
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                    {features.map((feature) => (
                        <Box key={feature.title} bg="white" p={6} borderRadius="xl" boxShadow="lg" textAlign="center">
                            <Heading mb={4}>{feature.title}</Heading>
                            <Text color="gray.600" lineHeight="tall">{feature.desc}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Container>
    )
}
