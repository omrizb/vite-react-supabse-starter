import { Outlet } from 'react-router-dom'
import { Navigation } from '../Navigation'
import { LayoutHeader, LayoutMain } from './Layout.styled'


export function Layout() {
    return (
        <>
            <LayoutHeader>
                <Navigation />
            </LayoutHeader>
            <LayoutMain>
                <Outlet />
            </LayoutMain>
        </>
    )
}
