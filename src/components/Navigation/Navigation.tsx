import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useStore'
import { signOut } from '../../store/auth.actions'
import { useState, useRef, useEffect, type MouseEvent } from 'react'
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import {
    NavigationWrapper,
    NavBrand,
    NavLinks,
    NavLink,
    NavButton,
    UserIndicator,
    UserTrigger,
    UserAvatar,
    UserIcon,
    UserName,
    UserMenu,
    UserMenuItem,
    HamburgerButton
} from './Navigation.styled'

export function Navigation() {
    const session = useAppSelector(state => state.authModule.session)
    const location = useLocation()
    const navigate = useNavigate()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const userMenuRef = useRef<HTMLDivElement | null>(null)

    function isActive(path: string): boolean {
        return location.pathname === path
    }

    function toggleMobileMenu(): void {
        setIsMobileMenuOpen(prev => !prev)
    }

    function toggleUserMenu(): void {
        setIsUserMenuOpen(prev => !prev)
    }

    function handleClickOutside(event: MouseEvent | globalThis.MouseEvent): void {
        if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
            setIsUserMenuOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    function handleSignOut(): void {
        signOut()
        setIsUserMenuOpen(false)
    }

    function getProxiedImageUrl(url: string): string {
        const proxiedImageUrl = `https://lodndpspkinrcxeodnlu.functions.supabase.co/proxy-image`
        return `${proxiedImageUrl}?url=${encodeURIComponent(url)}`
    }

    return (
        <NavigationWrapper>
            <NavBrand>
                <Link to="/">Navbar</Link>
            </NavBrand>

            <NavLinks className={isMobileMenuOpen ? 'mobile-open' : ''}>
                <NavLink
                    to="/dashboard"
                    $active={isActive('/dashboard')}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Dashboard
                </NavLink>
            </NavLinks>

            {session ? (
                <UserIndicator ref={userMenuRef}>
                    <UserTrigger onClick={toggleUserMenu} aria-expanded={isUserMenuOpen}>
                        {session.user.user_metadata.picture ? (
                            <UserAvatar
                                src={getProxiedImageUrl(session.user.user_metadata.picture)}
                                alt={session.user.user_metadata.name || 'User'}
                            />
                        ) : (
                            <UserIcon><FaUserCircle /></UserIcon>
                        )}
                        <UserName>{session.user.user_metadata.name || 'User'}</UserName>
                    </UserTrigger>

                    {isUserMenuOpen && (
                        <UserMenu>
                            <UserMenuItem onClick={handleSignOut}>
                                <FaSignOutAlt />
                                <span>Sign Out</span>
                            </UserMenuItem>
                        </UserMenu>
                    )}
                </UserIndicator>
            ) : (
                <NavButton onClick={() => navigate('/login')}>
                    Sign In
                </NavButton>
            )}

            <HamburgerButton onClick={toggleMobileMenu} aria-label="Toggle menu">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </HamburgerButton>
        </NavigationWrapper>
    )
}
