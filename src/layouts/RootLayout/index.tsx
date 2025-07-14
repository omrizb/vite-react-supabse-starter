import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Navigation } from '../../components/Navigation'

export function Layout() {
    return (
        <>
            <Box as='header' pt='64px'>
                <Navigation />
            </Box>
            <Box as='main'>
                <Outlet />
            </Box>
        </>
    )
}
