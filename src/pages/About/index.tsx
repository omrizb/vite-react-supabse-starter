import { Box, Flex, Heading } from '@chakra-ui/react'

export function About() {
    return (
        <Box p={6}>
            <Heading fontSize='2xl' fontWeight='semibold' mb={4}>
                About
            </Heading>

            <Flex direction='column' gap={6}>
                About us
            </Flex>
        </Box>
    )
}
