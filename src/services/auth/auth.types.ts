import type { Subscription } from '@supabase/supabase-js'

export interface AuthUser {
    id: string
    email: string | null
    fullName?: string | null
    [key: string]: any
}

export interface AuthSession {
    accessToken: string
    refreshToken: string
    user: AuthUser
}

export interface AuthState {
    session: AuthSession | null
}

export interface AuthService {
    getInitialSession(): Promise<AuthState>
    onAuthStateChange(callback: (state: AuthState) => void): Subscription
    signInWithGoogle(): Promise<void>
    signOut(): Promise<void>
}
