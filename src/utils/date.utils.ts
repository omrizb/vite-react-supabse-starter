type DateInput = string | number | Date | null | undefined

export const dateUtils = {
    formatDate,
    isValidDate,
    isPastDate,
    isFutureDate,
    getAge,
    formatDateForDisplay
}

function formatDate(date: DateInput): string | null {
    if (!date) return null
    return new Date(date).toISOString().split('T')[0]
}

function isValidDate(date: DateInput): boolean {
    if (!date) return false
    const d = new Date(date)
    return d instanceof Date && !isNaN(d.getTime())
}

function isPastDate(date: DateInput): boolean {
    if (!date) return false
    const d = new Date(date)
    return d < new Date()
}

function isFutureDate(date: DateInput): boolean {
    if (!date) return false
    const d = new Date(date)
    return d > new Date()
}

function getAge(birthDate: DateInput): number | null {
    if (!birthDate) return null
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--
    }

    return age
}

function formatDateForDisplay(date: DateInput): string {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
