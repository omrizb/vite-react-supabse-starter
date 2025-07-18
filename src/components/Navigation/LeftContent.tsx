import { Link } from 'react-router-dom'
import { Button, CloseButton, Drawer, HStack, IconButton, List, Portal, useDisclosure } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'

import { Logo } from '../Logo'
import type { NavItems } from '.'

interface Props {
    navItems: NavItems
}

export function LeftContent({ navItems }: Props) {
    const { open, onClose, onToggle } = useDisclosure()

    return (
        <HStack gap={6}>
            <Logo displayOnMobile={false} />

            <Drawer.Root placement='start' onOpenChange={onToggle} open={open}>
                <Drawer.Trigger asChild>
                    <IconButton
                        display={{ base: 'flex', md: 'none' }}
                        aria-label='Toggle Menu'
                        variant='ghost'
                    >
                        <FaBars />
                    </IconButton>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content w='100%'>
                            <Drawer.Header>
                                <Logo onClick={onClose} />
                            </Drawer.Header>
                            <Drawer.Body>
                                <List.Root variant='plain' gap={2}>
                                    {navItems.map((item) => (
                                        <List.Item key={item.label}>
                                            <Link to={item.url} onClick={onClose}>
                                                <Button variant='ghost' colorPalette='teal' size='md' _active={{ bg: 'teal.200' }}>{item.label}</Button>
                                            </Link>
                                        </List.Item>
                                    ))}
                                </List.Root>
                            </Drawer.Body>
                            <Drawer.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>

            <List.Root variant='plain' display={{ base: 'none', md: 'flex' }} flexDirection='row' gap={2}>
                {navItems.map((item) => (
                    <List.Item key={item.label}>
                        <Link to={item.url}>
                            <Button variant='ghost' colorPalette='teal' size='md' _active={{ bg: 'teal.200' }}>{item.label}</Button>
                        </Link>
                    </List.Item>
                ))}
            </List.Root>
        </HStack>
    )
}