const { VITE_LOCAL, DEV } = import.meta.env

import { userService as local } from './user.service.local'
import { userService as remote } from './user.service.remote'

const service = VITE_LOCAL === 'true' ? local : remote
export const userService = { ...service }

export type { Profile, UserService } from './user.types'

// Expose for debugging in dev
if (DEV) {
    (window as any).userService = userService
}
