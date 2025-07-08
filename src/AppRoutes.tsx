import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from './hooks/useStore'

import { PostLoginRedirect } from './components/PostLoginRedirect'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'

import { LoadingSpinner } from './components/ui/LoadingSpinner'
import { ErrorMessage } from './components/ui/ErrorMessage'

import './style/main.scss'

export function AppRoutes() {
    const { session, loadingSession, error } = useAppSelector(state => state.authModule)

    if (loadingSession) {
        return <LoadingSpinner message="Loading Momenti" />
    }

    if (error) {
        return <ErrorMessage title="Error" message={error.message} />
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
            </Routes>
        </Router>
    )
}
