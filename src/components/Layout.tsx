import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'

import './Layout.scss'


export function Layout() {
    return (
        <>
            <header className="layout-header">
                <Navigation />
            </header>
            <main className="layout-main">
                <Outlet />
            </main>
        </>
    )
}
