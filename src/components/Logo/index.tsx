import { Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface Props {
    displayOnMobile?: boolean
    isLink?: boolean
    onClick?: () => void
}

export function Logo({ displayOnMobile = true, isLink = true, onClick }: Props) {
    return (
        <Heading
            color='heading'
            fontSize='2xl'
            fontWeight='bold'
            display={{ base: displayOnMobile ? 'flex' : 'none', md: 'flex' }}
            onClick={onClick}
        >
            {isLink ? (
                <Link to='/'>
                    LOGO
                </Link>
            ) : (
                'LOGO'
            )}
        </Heading>
    )
}