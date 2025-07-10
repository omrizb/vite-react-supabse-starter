import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useStore'
import { signInWithGoogle } from '../../store/auth.actions'
import { LoadingSpinner } from '../../components/ui/LoadingSpinner'
import { FcGoogle } from 'react-icons/fc'
import { ImSpinner2 } from 'react-icons/im'

import {
    LoginPage,
    LoginCard,
    ButtonContainer,
    GoogleButton,
    BackButton,
    SpinnerIcon
} from './Login.styled'

export function Login() {
    const session = useAppSelector(state => state.authModule.session)
    const loadingSession = useAppSelector(state => state.authModule.loadingSession)
    const [loadingLogin, setLoadingLogin] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (session) {
            navigate('/dashboard')
        }
    }, [session, navigate])

    async function handleLogin() {
        setLoadingLogin(true)
        const { error } = await signInWithGoogle('')
        if (error) {
            console.error('Login error:', error.message)
            setLoadingLogin(false)
        }
    }

    if (loadingSession) return <LoadingSpinner message="Loading login" />

    return (
        <LoginPage>
            <LoginCard>
                <h1>Welcome to Momenti</h1>
                <p>Sign in to start your journey</p>
                <ButtonContainer>
                    <GoogleButton onClick={handleLogin} disabled={loadingLogin}>
                        {loadingLogin ? (
                            <SpinnerIcon as={ImSpinner2} size={20} />
                        ) : (
                            <>
                                <FcGoogle size={24} />
                                <span>Sign in with Google</span>
                            </>
                        )}
                    </GoogleButton>

                    <BackButton onClick={() => navigate('/')} disabled={loadingLogin}>
                        ← Back to Homepage
                    </BackButton>
                </ButtonContainer>
            </LoginCard>
        </LoginPage>
    )
}
