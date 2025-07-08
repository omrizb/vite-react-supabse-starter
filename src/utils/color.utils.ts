type RGB = { r: number; g: number; b: number }
type HSV = { h: number; s: number; v: number }

export const colorUtilService = {
    adjustBrightness,
    getRandomColor,
    hexToRgb,
    hsvToRgb,
    rgbToHex,
    rgbToHsv
}

function getRandomColor(): string {
    const chars = '0123456789abcdef'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * chars.length)]
    }
    return color
}

function hexToRgb(hex: string): RGB {
    const bigint = parseInt(hex.slice(1), 16)
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    }
}

function rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
}

function rgbToHsv(r: number, g: number, b: number): HSV {
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const d = max - min
    const s = max === 0 ? 0 : d / max
    const v = max / 255

    let h: number
    switch (max) {
        case min:
            h = 0
            break
        case r:
            h = (g - b) + d * (g < b ? 6 : 0)
            h /= 6 * d
            break
        case g:
            h = (b - r) + d * 2
            h /= 6 * d
            break
        case b:
            h = (r - g) + d * 4
            h /= 6 * d
            break
        default:
            h = 0
    }

    return { h, s, v }
}

function hsvToRgb(h: number, s: number, v: number): RGB {
    let r: number, g: number, b: number

    const i = Math.floor(h * 6)
    const f = h * 6 - i
    const p = v * (1 - s)
    const q = v * (1 - f * s)
    const t = v * (1 - (1 - f) * s)

    switch (i % 6) {
        case 0: r = v, g = t, b = p; break
        case 1: r = q, g = v, b = p; break
        case 2: r = p, g = v, b = t; break
        case 3: r = p, g = q, b = v; break
        case 4: r = t, g = p, b = v; break
        case 5: r = v, g = p, b = q; break
        default: r = g = b = 0
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    }
}

function adjustBrightness(hex: string, factor: number): string {
    const rgb = hexToRgb(hex)
    const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b)
    hsv.v = Math.min(1, hsv.v * factor)
    const newRgb = hsvToRgb(hsv.h, hsv.s, hsv.v)
    return rgbToHex(newRgb.r, newRgb.g, newRgb.b)
}
