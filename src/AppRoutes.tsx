import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from './hooks/useStore'

import { PostLoginRedirect } from './components/PostLoginRedirect'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Error } from './pages/Error'

import { LoadingSpinner } from './components/ui/LoadingSpinner'

import './style/main.scss'

export function AppRoutes() {
    const { session, loadingSession, error } = useAppSelector(state => state.authModule)

    if (loadingSession) {
        return <LoadingSpinner message="Loading" />
    }

    if (error) {
        const errorMessage = error instanceof Error ? error.message : 'An authentication error occurred'
        return (
            <Router>
                <Error
                    title="Authentication Error"
                    message={errorMessage}
                    code={500}
                />
            </Router>
        )
    }

    return (
        <Router>
            <PostLoginRedirect />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="dashboard" element={session ? <Dashboard /> : <Navigate to="/login" replace />} />
                </Route>
                <Route path="*" element={<Error title="Page Not Found" message="The page you are looking for does not exist." code={404} />} />
            </Routes>
        </Router>
    )
}
