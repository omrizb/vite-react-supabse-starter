export const SHOW_MSG = 'show-msg'
export const SHOW_TOOLTIP = 'show-tooltip'

type Listener<T = any> = (data: T) => void
type EventMap = {
    [eventName: string]: Listener[]
}

function createEventEmitter() {
    const listenersMap: EventMap = {}

    return {
        on<T = any>(evName: string, listener: Listener<T>): () => void {
            listenersMap[evName] = listenersMap[evName]
                ? [...listenersMap[evName], listener]
                : [listener]

            return () => {
                listenersMap[evName] = listenersMap[evName].filter(func => func !== listener)
            }
        },

        emit<T = any>(evName: string, data: T): void {
            if (!listenersMap[evName]) return
            listenersMap[evName].forEach(listener => listener(data))
        }
    }
}

export const eventBusService = createEventEmitter()

type UserMsg = { txt: string; type?: 'success' | 'error' }

export function showUserMsg(msg: UserMsg): void {
    eventBusService.emit<UserMsg>(SHOW_MSG, msg)
}

export function showSuccessMsg(txt: string): void {
    showUserMsg({ txt, type: 'success' })
}

export function showErrorMsg(txt: string): void {
    showUserMsg({ txt, type: 'error' })
}

type TooltipProps = Record<string, any>

export function showTooltip(props: TooltipProps): void {
    eventBusService.emit(SHOW_TOOLTIP, props)
}

// Optional global access
// (window as any).showUserMsg = showUserMsg
