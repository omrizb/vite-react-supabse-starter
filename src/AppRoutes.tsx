import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from './hooks/useStore'

import { PostLoginRedirect } from './components/PostLoginRedirect'
import { Layout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { About } from './pages/About'
import { Error } from './pages/Error'

import 'open-props/open-props.min.css'

export function AppRoutes() {
    const { session, error } = useAppSelector(state => state.authModule)

    if (error) {
        return (
            <Router>
                <Error
                    title="Authentication Error"
                    message={error.message}
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
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="*" element={<Error title="Page Not Found" message="The page you are looking for does not exist." code={404} />} />
            </Routes>
        </Router>
    )
}
