type AnyObject = Record<string, any>

export const commonUtils = {
    makeId,
    makeLorem,
    camelCaseToSnakeCase,
    snakeCaseToCamelCase,
    getRandomIntInclusive,
    getRandomItems,
    getTimeStr,
    getDayName,
    getMonthName,
    breakArrayToCommas,
    animateCSS,
    rgbToHex,
    deepEqual,
    deepMerge,
    debounce,
    sleep
}

function makeId(length: number = 6): string {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size: number = 100): string {
    const words = ['The sky', 'above', 'the port', 'was', 'the color', 'of nature', 'tuned', 'to', 'a live channel', 'All', 'this happened', 'more or less', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', 'a pleasure', 'to', 'burn']
    let txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)]
        if (size >= 1) txt += ' '
    }
    return txt
}

function camelCaseToSnakeCase(obj: AnyObject): AnyObject {
    if (!obj || typeof obj !== 'object') return obj

    const newObj: AnyObject = {}

    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
            newObj[snakeKey] = obj[key]
        }
    }

    return newObj
}

function snakeCaseToCamelCase(obj: AnyObject): AnyObject {
    if (!obj || typeof obj !== 'object') return obj

    const newObj: AnyObject = {}

    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
            newObj[camelKey] = obj[key]
        }
    }

    return newObj
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomItems<T>(items: T[], size: number, singleItem = false, duplicationAllowed = false): T | T[] | undefined {
    if (size > items.length && !duplicationAllowed) return

    const res: T[] = []
    const srcArray = duplicationAllowed ? items : [...items]
    for (let i = 0; i < size; i++) {
        if (!duplicationAllowed && srcArray.length === 0) break
        const randIdx = Math.floor(Math.random() * srcArray.length)
        res.push(srcArray[randIdx])
        if (!duplicationAllowed) srcArray.splice(randIdx, 1)
    }
    return singleItem ? res[0] : res
}

function getTimeStr(timeInSeconds: number): string {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = timeInSeconds % 60

    const timeInMinutes = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    return (timeInSeconds < 3600) ? timeInMinutes : `${hours.toString().padStart(2, '0')}:${timeInMinutes}`
}

function getDayName(date: string | number | Date, locale: string = 'en-US'): string {
    date = new Date(date)
    return date.toLocaleDateString(locale, { weekday: 'long' })
}

function getMonthName(date: Date): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return monthNames[date.getMonth()]
}

function breakArrayToCommas(arr: string[]): string {
    return arr.reduce((acc, currValue, idx) => {
        if (idx === 0) {
            return currValue
        }
        if (idx !== arr.length - 1) {
            return acc + `, ${currValue}`
        } else {
            return acc + `and ${currValue}`
        }
    }, '')
}

function animateCSS(el: HTMLElement, animation: string = 'bounce'): Promise<string> {
    const prefix = 'animate__'
    return new Promise((resolve) => {
        const animationName = `${prefix}${animation}`
        el.classList.add(`${prefix}animated`, animationName)
        function handleAnimationEnd(event: AnimationEvent) {
            event.stopPropagation()
            el.classList.remove(`${prefix}animated`, animationName)
            resolve('Animation ended')
        }

        el.addEventListener('animationend', handleAnimationEnd, { once: true })
    })
}

function rgbToHex(rgb: string): string {
    const result = rgb.match(/\d+/g)
    if (!result || result.length < 3) return '#000000'
    return `#${((1 << 24) + (+result[0] << 16) + (+result[1] << 8) + +result[2]).toString(16).slice(1).toLowerCase()}`
}

function deepEqual(x: any, y: any): boolean {
    if (x === y) return true
    if (typeof x === 'object' && x != null && typeof y === 'object' && y != null) {
        if (Object.keys(x).length !== Object.keys(y).length) return false
        for (const prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop])) return false
            } else {
                return false
            }
        }
        return true
    }
    return false
}

function deepMerge(target: any, source: any): any {
    const isObject = (obj: any) => obj && typeof obj === 'object'

    if (!isObject(target) || !isObject(source)) return source

    Object.keys(source).forEach(key => {
        const targetValue = target[key]
        const sourceValue = source[key]

        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            sourceValue.forEach(item => {
                if (isObject(item)) {
                    const targetIndex = targetValue.findIndex((t: any) => t.id === item.id)
                    if (targetIndex > -1) {
                        targetValue[targetIndex] = deepMerge(targetValue[targetIndex], item)
                    } else {
                        targetValue.push(item)
                    }
                } else {
                    if (!targetValue.includes(item)) {
                        targetValue.push(item)
                    }
                }
            })
        } else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = deepMerge({ ...targetValue }, sourceValue)
        } else {
            target[key] = sourceValue
        }
    })

    return target
}

function debounce<T extends (...args: any[]) => void>(callback: T, wait: number): (...args: Parameters<T>) => void {
    let timeoutId: number | null = null
    return (...args: Parameters<T>) => {
        if (timeoutId !== null) window.clearTimeout(timeoutId)
        timeoutId = window.setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}
