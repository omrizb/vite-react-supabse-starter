import type { Subscription } from '@supabase/supabase-js'
import type { AuthService, AuthSession, AuthState } from './auth.types'

let mockSession: AuthSession | null = null

export const authService: AuthService = {
    getInitialSession,
    onAuthStateChange,
    signInWithGoogle,
    signOut,
}

async function getInitialSession(): Promise<AuthState> {
    return { session: mockSession }
}

function onAuthStateChange(callback: (state: AuthState) => void): Subscription {
    callback({ session: mockSession })
    return {
        unsubscribe: () => { },
    } as Subscription
}


async function signInWithGoogle(): Promise<void> {
    mockSession = {
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
        user: {
            id: 'mock-user-id',
            email: 'user@example.com',
            fullName: 'Mock User',
        },
    }
}

async function signOut(): Promise<void> {
    mockSession = null
}
