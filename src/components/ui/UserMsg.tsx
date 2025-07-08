import { useEffect, useRef, useState } from 'react'
import { eventBusService } from '../services/event-bus.service'

interface UserMsgData {
    txt: string
    type: 'success' | 'error' | 'info' | 'warning' | string // extend as needed
}

export function UserMsg() {
    const [msg, setMsg] = useState<UserMsgData | null>(null)
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const unsubscribe = eventBusService.on('show-user-msg', (msg: UserMsgData) => {
            setMsg(msg)

            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current)
                timeoutIdRef.current = null
            }

            timeoutIdRef.current = setTimeout(closeMsg, 5000)
        })

        return unsubscribe
    }, [])

    function closeMsg() {
        setMsg(null)
    }

    if (!msg) return <span></span>

    return (
        <section className={`user-msg ${msg.type}`}>
            <p>{msg.txt}</p>
            <button className="btn" onClick={closeMsg}>Close</button>
        </section>
    )
}
