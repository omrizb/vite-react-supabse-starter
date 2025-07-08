const { DEV, VITE_LOCAL } = import.meta.env

import { authService as local } from './auth.service.local'
import { authService as remote } from './auth.service.remote'
import type { AuthService, AuthSession, AuthUser, AuthState } from './auth.types'

const service: AuthService = VITE_LOCAL === 'true' ? local : remote
export const authService = { ...service }

export type { AuthService, AuthSession, AuthUser, AuthState }

if (DEV) {
    (window as any).authService = authService
}
