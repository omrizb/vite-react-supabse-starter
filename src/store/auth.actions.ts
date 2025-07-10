import { store } from './store'
import { AuthActionType } from './auth.reducer'
import { authService, type AuthSession } from '../services/auth'
import { userService, type Profile } from '../services/user'
import { storageUtils } from '../utils/storage.utils'

const POST_LOGIN_REDIRECT_KEY = import.meta.env.POST_LOGIN_REDIRECT_KEY as string

// ---------- High-level auth actions ----------

export async function initAuth(): Promise<void> {
    store.dispatch(getCmdSetLoadingSession(true))
    try {
        const { session } = await authService.getInitialSession()

        store.dispatch(getCmdSetSession(session))

        const profile = session
            ? await userService.getUserProfile(session.user.id)
            : null

        store.dispatch(getCmdSetProfile(profile))
    } catch (err) {
        console.error('Failed to init auth:', err)
        store.dispatch(getCmdSetAuthError(err))
    } finally {
        store.dispatch(getCmdSetLoadingSession(false))
    }
}

export function startAuthStateListener(): () => void {
    const subscription = authService.onAuthStateChange(async ({ session }) => {
        if (session) {
            store.dispatch(getCmdSetSession(session))

            try {
                const profile = await userService.getUserProfile(session.user.id)
                store.dispatch(getCmdSetProfile(profile))
            } catch (err) {
                console.error('Failed to fetch profile after auth change:', err)
                store.dispatch(getCmdSetProfile(null))
                store.dispatch(getCmdSetAuthError(err))
            }
        } else {
            store.dispatch(getCmdClearAuth())
        }
    })

    return () => subscription.unsubscribe()
}

export async function refreshProfile(): Promise<void> {
    try {
        const { session } = await authService.getInitialSession()
        if (!session) throw new Error('No session found')

        const profile = await userService.getUserProfile(session.user.id)
        store.dispatch(getCmdSetProfile(profile))
    } catch (err) {
        console.error('Failed to refresh profile:', err)
        store.dispatch(getCmdSetAuthError(err))
    }
}

export async function signInWithGoogle(redirectToPage: string): Promise<{ error?: Error }> {
    try {
        storageUtils.saveToStorage(POST_LOGIN_REDIRECT_KEY, redirectToPage)
        await authService.signInWithGoogle()
        return {}
    } catch (err) {
        console.error('Failed to sign in with Google:', err)
        store.dispatch(getCmdSetAuthError(err))
        return { error: err instanceof Error ? err : new Error('Unknown error') }
    }
}

export async function signOut(): Promise<void> {
    try {
        await authService.signOut()
        store.dispatch(getCmdClearAuth())
    } catch (err) {
        console.error('Failed to sign out:', err)
        store.dispatch(getCmdSetAuthError(err))
    }
}

// ---------- command creators ----------

function getCmdSetSession(session: AuthSession | null) {
    return { type: AuthActionType.SET_SESSION, session }
}

function getCmdSetProfile(profile: Profile | null) {
    return { type: AuthActionType.SET_PROFILE, profile }
}

function getCmdSetLoadingSession(isLoading: boolean) {
    return { type: AuthActionType.SET_LOADING_SESSION, isLoading }
}

function getCmdSetAuthError(error: unknown) {
    return {
        type: AuthActionType.SET_AUTH_ERROR,
        error: error instanceof Error ? error : new Error('Unknown error')
    }
}

function getCmdClearAuth() {
    return { type: AuthActionType.CLEAR_AUTH }
}
