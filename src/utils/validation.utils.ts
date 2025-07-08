import * as Yup from 'yup'

export const validationUtils = {
    validateProfileSchema
}

// Schema
const profileSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
})

// Use Yup's inferred type directly
type Profile = Yup.InferType<typeof profileSchema>
type ValidationErrors = { [key: string]: string }

// Public validator
async function validateProfileSchema(profile: Profile): Promise<boolean> {
    return _validateSchema(profileSchema, profile)
}

// Generic helper (no explicit ObjectSchema or constraint needed)
async function _validateSchema<T>(
    schema: Yup.AnyObjectSchema,
    data: T
): Promise<boolean> {
    try {
        await schema.validate(data, { abortEarly: false })
        return true
    } catch (error: any) {
        if (error.name === 'ValidationError') {
            const validationErrors: ValidationErrors = {}
            error.inner.forEach((err: Yup.ValidationError) => {
                if (err.path) {
                    validationErrors[err.path] = err.message
                }
            })
            throw validationErrors
        }
        throw error
    }
}
