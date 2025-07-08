import { supabase } from '../supabase.service'
import type { Subscription } from '@supabase/supabase-js'
import type { AuthService, AuthSession, AuthState } from './auth.types'

export const authService: AuthService = {
    getInitialSession,
    onAuthStateChange,
    signInWithGoogle,
    signOut,
}

async function getInitialSession(): Promise<AuthState> {
    const {
        data: { session },
        error,
    } = await supabase.auth.getSession()

    if (error) throw error

    return {
        session: session ? mapSession(session) : null,
    }
}

function onAuthStateChange(callback: (authState: AuthState) => void): Subscription {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (_event, session) => {
            callback({
                session: session ? mapSession(session) : null,
            })
        }
    )

    return subscription
}

async function signInWithGoogle(): Promise<void> {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: window.location.origin,
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    })

    if (error) throw error
}

async function signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut({ scope: 'local' })
    if (error) throw error
}

// ===== Helpers =====

function mapSession(session: any): AuthSession {
    return {
        accessToken: session.access_token,
        refreshToken: session.refresh_token,
        user: {
            id: session.user.id,
            email: session.user.email,
            fullName: session.user.user_metadata?.full_name || null,
            ...session.user,
        },
    }
}
