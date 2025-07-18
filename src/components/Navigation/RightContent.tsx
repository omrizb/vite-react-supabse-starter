import { useAppSelector } from "@/hooks/useStore"
import { Avatar, Box, Button, HStack, Menu, Portal, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import { signOut } from '../../store/auth.actions'

export function RightContent() {

    const session = useAppSelector(state => state.authModule.session)
    const navigate = useNavigate()

    function handleSignOut() {
        signOut()
        navigate('/')
    }

    return (
        <Box>
            {session ? (
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <HStack gap={3} cursor='default'>
                            <Avatar.Root size="md">
                                <Avatar.Fallback name={session?.user.user_metadata.name} />
                                <Avatar.Image src={session?.user.user_metadata.picture} />
                            </Avatar.Root>
                            <Stack gap={0} display={{ base: 'none', md: 'flex' }} fontSize='sm'>
                                <Text>Welcome,</Text>
                                <Text fontWeight='bold'>
                                    {session.user.user_metadata.name || 'User'}
                                </Text>
                            </Stack>
                        </HStack>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <Menu.Content>
                                <Menu.Item value='sign-out' onClick={handleSignOut}>
                                    <FaSignOutAlt />
                                    Sign Out
                                </Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            ) : (
                <Button variant='ghost' size='sm' mr={4} onClick={() => navigate('/login')}>
                    Sign In
                </Button>
            )}
        </Box>
    )
}