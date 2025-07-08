export const storageUtils = {
    loadFromStorage,
    saveToStorage,
    removeFromStorage,
}

function loadFromStorage<T = any>(key: string): T | undefined {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) as T : undefined
}

function saveToStorage(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value))
}

function removeFromStorage(key: string): void {
    localStorage.removeItem(key)
}
