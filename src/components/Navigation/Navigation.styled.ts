import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationWrapper = styled.nav`
    height: var(--nav-height);
    background-color: white;
    border-bottom: 1px solid var(--gray-2);
    padding: var(--size-2) var(--size-6);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: var(--shadow-1);
`

export const NavBrand = styled.div`
    margin-right: var(--size-8);

    a {
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-6);
        text-decoration: none;
        color: var(--blue-8);
        transition: opacity var(--transition-normal);

        &:hover {
            opacity: 0.9;
        }
    }
`

export const NavLinks = styled.div<{ $mobileOpen?: boolean }>`
    display: flex;
    gap: var(--size-6);
    align-items: center;
    margin-right: auto;

    @media (max-width: 768px) {
        display: ${({ $mobileOpen }) => ($mobileOpen ? 'flex' : 'none')};
    }
`

export const NavLink = styled(Link) <{ $active?: boolean }>`
    text-decoration: none;
    color: var(--gray-6);
    font-weight: var(--font-weight-5);
    font-size: var(--font-size-base);
    padding: var(--size-2) var(--size-3);
    border-radius: var(--radius-2);
    transition: all var(--transition-normal);
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        width: ${({ $active }) => ($active ? '100%' : '0')};
        height: 2px;
        background: var(--blue-8);
        transform: translateX(-50%);
        transition: all var(--transition-normal);
        opacity: ${({ $active }) => ($active ? 1 : 0)};
    }

    &:hover {
        color: var(--gray-8);
        background-color: var(--gray-0);

        &::after {
            width: 100%;
            opacity: 1;
        }
    }

    ${({ $active }) => $active && `
        color: var(--blue-8);
        background-color: rgba(0, 123, 255, 0.05);
    `}
`

export const NavButton = styled.button`
    padding: var(--size-2) var(--size-4);
    border: none;
    border-radius: var(--radius-2);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--gray-6);
    background-color: transparent;
    cursor: pointer;
    transition: all var(--transition-normal);
    margin-right: var(--size-4);

    &:hover {
        color: var(--gray-8);
        background-color: var(--gray-1);
    }
`

export const UserIndicator = styled.div`
    position: relative;
    margin-right: var(--size-4);
`

export const UserTrigger = styled.button`
    display: flex;
    align-items: center;
    gap: var(--size-2);
    padding: var(--size-2);
    border: none;
    border-radius: var(--radius-2);
    background-color: transparent;
    cursor: pointer;
    transition: all var(--transition-normal);

    &:hover {
        background-color: var(--gray-0);
    }
`

export const UserAvatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`

export const UserIcon = styled.div`
    width: 32px;
    height: 32px;
    color: var(--gray-4);
`

export const UserName = styled.span`
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--gray-7);
`

export const UserMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: var(--size-2);
    background-color: var(--surface-1);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-2);
    min-width: 200px;
    z-index: var(--layer-popover);
`

export const UserMenuItem = styled.button`
    display: flex;
    align-items: center;
    gap: var(--size-2);
    width: 100%;
    padding: var(--size-3);
    border: none;
    background: none;
    color: var(--gray-7);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    transition: all var(--transition-normal);

    svg {
        width: 16px;
        height: 16px;
        color: var(--gray-5);
    }

    &:hover {
        background-color: var(--gray-0);
        color: var(--gray-9);

        svg {
        color: var(--gray-7);
        }
    }
`

export const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    padding: var(--size-2);
    cursor: pointer;
    color: var(--gray-6);
    transition: color var(--transition-normal);
    margin-left: auto;

    &:hover {
        color: var(--gray-8);
    }

    svg {
        width: 24px;
        height: 24px;
        display: block;
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
