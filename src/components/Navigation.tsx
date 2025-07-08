import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useStore'
import { signOut } from '../store/auth.actions'
import { useState, useRef, useEffect, type MouseEvent } from 'react'
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import './Navigation.scss'

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
        <nav className="navigation">
            <div className="nav-brand">
                <Link to="/">Navbar</Link>
            </div>
            <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <Link
                    to="/dashboard"
                    className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Dashboard
                </Link>
            </div>
            {session ? (
                <div className="user-indicator" ref={userMenuRef}>
                    <button
                        className="user-trigger"
                        onClick={toggleUserMenu}
                        aria-expanded={isUserMenuOpen}
                    >
                        {session.user.user_metadata.picture ? (
                            <img
                                src={getProxiedImageUrl(session.user.user_metadata.picture)}
                                alt={session.user.user_metadata.name || 'User'}
                                className="user-avatar"
                            />
                        ) : (
                            <FaUserCircle className="user-icon" />
                        )}
                        <span className="user-name">{session.user.user_metadata.name || 'User'}</span>
                    </button>
                    {isUserMenuOpen && (
                        <div className="user-menu">
                            <button onClick={handleSignOut} className="user-menu-item">
                                <FaSignOutAlt />
                                <span>Sign Out</span>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <button
                    onClick={() => navigate('/login')}
                    className="nav-button"
                >
                    Sign In
                </button>
            )}
            <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    )
}
