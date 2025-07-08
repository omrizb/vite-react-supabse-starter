export interface Profile {
    id: string
    username: string
    avatarUrl?: string
    bio?: string
    [key: string]: any
}

export interface UserService {
    getUserProfile(userId: string): Promise<Profile | null>
    updateUserProfile(userId: string, updates: Partial<Profile>): Promise<Profile>
    upsertUserProfile(userId: string, profileData: Partial<Profile>): Promise<Profile>
    deleteUserProfile(userId: string): Promise<void>
}
