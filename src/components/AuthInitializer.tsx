import { useEffect } from 'react'
import { initAuth, startAuthStateListener } from '../store/auth.actions'

export function AuthInitializer() {
    useEffect(() => {
        initAuth()
        const unsubscribe = startAuthStateListener()
        return unsubscribe
    }, [])

    return null
}
