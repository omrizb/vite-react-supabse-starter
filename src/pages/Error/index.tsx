import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react'

interface Props {
    title?: string
    message?: string
    code?: number
}

export function Error({
    title = 'Something went wrong',
    message = 'An unexpected error occurred',
    code = 500,
}: Props = {}) {
    const codeSize = useBreakpointValue({ base: '100px', md: '120px' })
    const fontSize = useBreakpointValue({ base: '3xl', md: '4xl' })

    return (
        <Flex
            minH='100vh'
            align='center'
            justify='center'
            p={{ base: 4, md: 8 }}
            bg='gray.50'
        >
            <Box
                bg='white'
                borderRadius='lg'
                p={{ base: 8, md: 12 }}
                textAlign='center'
                boxShadow='2xl'
                maxW='500px'
                w='full'
            >
                <VStack gap={6}>
                    <Box
                        bg='red.50'
                        color='red.500'
                        border='4px solid'
                        borderColor='red.500'
                        borderRadius='full'
                        w={codeSize}
                        h={codeSize}
                        lineHeight={codeSize}
                        fontSize={fontSize}
                        fontWeight='bold'
                    >
                        {code}
                    </Box>

                    <Heading size='lg' color='gray.800'>
                        {title}
                    </Heading>

                    <Text fontSize='md' color='gray.600'>
                        {message}
                    </Text>

                    <Flex
                        justify='center'
                        gap={4}
                        wrap='wrap'
                        direction={{ base: 'column', md: 'row' }}
                    >
                        <Button colorScheme='blue' onClick={() => window.history.back()}>
                            Go Back
                        </Button>
                        <Button
                            variant='outline'
                            colorScheme='blue'
                            onClick={() => (window.location.href = '/')}
                        >
                            Go Home
                        </Button>
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    )
}
