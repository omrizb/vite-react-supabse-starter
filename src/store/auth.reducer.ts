import type { AuthSession } from '../services/auth'
import type { Profile } from '../services/user'

export enum AuthActionType {
    SET_SESSION = 'SET_SESSION',
    SET_PROFILE = 'SET_PROFILE',
    SET_LOADING_SESSION = 'SET_LOADING_SESSION',
    SET_AUTH_ERROR = 'SET_AUTH_ERROR',
    CLEAR_AUTH = 'CLEAR_AUTH',
}

interface AuthState {
    session: AuthSession | null
    profile: Profile | null
    loadingSession: boolean
    error: Error | null
}

const initialState: AuthState = {
    session: null,
    profile: null,
    loadingSession: true,
    error: null,
}

type AuthAction =
    | { type: AuthActionType.SET_SESSION; session: AuthSession | null }
    | { type: AuthActionType.SET_PROFILE; profile: Profile | null }
    | { type: AuthActionType.SET_LOADING_SESSION; isLoading: boolean }
    | { type: AuthActionType.SET_AUTH_ERROR; error: Error }
    | { type: AuthActionType.CLEAR_AUTH }

export function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionType.SET_SESSION:
            return { ...state, session: action.session }
        case AuthActionType.SET_PROFILE:
            return { ...state, profile: action.profile }
        case AuthActionType.SET_LOADING_SESSION:
            return { ...state, loadingSession: action.isLoading }
        case AuthActionType.SET_AUTH_ERROR:
            return { ...state, error: action.error }
        case AuthActionType.CLEAR_AUTH:
            return { ...initialState, loadingSession: false }
        default:
            return state
    }
}
