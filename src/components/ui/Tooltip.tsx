import { useEffect, useState, type CSSProperties } from 'react'
import { eventBusService, SHOW_TOOLTIP } from '../../services/event-bus.service'

interface TooltipProps {
    isVisible: boolean
    txt: string
    style?: CSSProperties
}

export function Tooltip() {
    const [props, setProps] = useState<TooltipProps | null>(null)

    useEffect(() => {
        return eventBusService.on(SHOW_TOOLTIP, (newProps: TooltipProps) => setProps(newProps))
    }, [])

    return (
        <>
            {props && props.isVisible && (
                <div className="tooltip" style={props.style}>
                    {props.txt}
                </div>
            )}
        </>
    )
}
