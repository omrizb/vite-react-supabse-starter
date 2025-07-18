import { HStack } from '@chakra-ui/react'

import { LeftContent } from './LeftContent'
import { RightContent } from './RightContent'

export type NavItems = Array<{
    label: string
    url: string
}>

export function Navigation() {

    const navItems: NavItems = [
        {
            label: 'Dashboard',
            url: '/dashboard'
        },
        {
            label: 'About',
            url: '/about'
        }
    ]

    return (
        <HStack
            as='nav'
            position='fixed'
            top='0'
            left='0'
            right='0'
            justify='space-between'
            bg='white'
            borderBottom='1px solid'
            borderColor='gray.200'
            px={6}
            py={2}
        >
            <LeftContent navItems={navItems} />
            <RightContent />
        </HStack>
    )
}
