import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useStore'
import { signInWithGoogle } from '../store/auth.actions'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'
import { FcGoogle } from 'react-icons/fc'
import { ImSpinner2 } from 'react-icons/im'

import './Login.scss'

export function Login() {
    const session = useAppSelector(state => state.authModule.session)
    const loadingSession = useAppSelector(state => state.authModule.loadingSession)
    const [loadingLogin, setLoadingLogin] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (session) {
            navigate('/dashboard')
        }
    }, [session, navigate])

    async function handleLogin(): Promise<void> {
        setLoadingLogin(true)
        const { error } = await signInWithGoogle('')
        if (error) {
            console.error('Login error:', error.message)
            setLoadingLogin(false)
        }
    }

    if (loadingSession) {
        return <LoadingSpinner message="Loading login" />
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Welcome to Momenti</h1>
                <p>Sign in to start your journey</p>
                <div className="button-container">
                    <button
                        className="google-button"
                        onClick={handleLogin}
                        disabled={loadingLogin}
                    >
                        {loadingLogin ? (
                            <ImSpinner2 className="spinner-icon" size={20} />
                        ) : (
                            <>
                                <FcGoogle size={24} />
                                <span>Sign in with Google</span>
                            </>
                        )}
                    </button>

                    <button
                        className="back-button"
                        onClick={() => navigate('/')}
                        disabled={loadingLogin}
                    >
                        ← Back to Homepage
                    </button>
                </div>
            </div>
        </div>
    )
}
