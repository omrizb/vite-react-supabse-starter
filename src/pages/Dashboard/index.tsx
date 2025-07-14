import { Box, Flex, Heading } from '@chakra-ui/react'

export function Dashboard() {
    return (
        <Box p={6}>
            <Heading fontSize='2xl' fontWeight='semibold' mb={4}>
                Dashboard
            </Heading>

            <Flex direction='column' gap={6}>
                Dashboard Content
            </Flex>
        </Box>
    )
}
