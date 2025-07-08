import type { Profile, UserService } from './user.types'

const mockDb: Record<string, Profile> = {}

export const userService: UserService = {
    getUserProfile,
    updateUserProfile,
    upsertUserProfile,
    deleteUserProfile,
}

async function getUserProfile(userId: string): Promise<Profile | null> {
    return mockDb[userId] ?? null
}

async function updateUserProfile(userId: string, updates: Partial<Profile>): Promise<Profile> {
    if (!mockDb[userId]) throw new Error('User not found')
    mockDb[userId] = { ...mockDb[userId], ...updates }
    return mockDb[userId]
}

async function upsertUserProfile(userId: string, profileData: Partial<Profile>): Promise<Profile> {
    const updated = { ...mockDb[userId], ...profileData, id: userId }
    mockDb[userId] = updated
    return updated
}

async function deleteUserProfile(userId: string): Promise<void> {
    delete mockDb[userId]
}
