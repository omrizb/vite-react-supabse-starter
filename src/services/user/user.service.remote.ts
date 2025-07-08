import { supabase } from '../supabase.service'
import { commonUtils } from '../../utils/common.utils'
import type { Profile, UserService } from './user.types'

export const userService: UserService = {
    getUserProfile,
    updateUserProfile,
    upsertUserProfile,
    deleteUserProfile,
}

async function getUserProfile(userId: string): Promise<Profile | null> {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle()

    if (error) throw error
    return data ? commonUtils.snakeCaseToCamelCase(data) as Profile : null
}

async function updateUserProfile(userId: string, updates: Partial<Profile>): Promise<Profile> {
    const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single()

    if (error) throw error
    return commonUtils.snakeCaseToCamelCase(data) as Profile
}

async function upsertUserProfile(userId: string, profileData: Partial<Profile>): Promise<Profile> {
    const formattedData = {
        id: userId,
        ...commonUtils.camelCaseToSnakeCase(profileData),
        updated_at: new Date().toISOString(),
    }

    const { data, error } = await supabase
        .from('profiles')
        .upsert(formattedData)
        .select()
        .single()

    if (error) throw error
    return commonUtils.snakeCaseToCamelCase(data) as Profile
}

async function deleteUserProfile(userId: string): Promise<void> {
    const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId)

    if (error) throw error
}
