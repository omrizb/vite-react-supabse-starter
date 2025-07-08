import { useEffect, useRef } from 'react'

type EffectCallback = () => void | (() => void)

export function useEffectOnUpdate(effect: EffectCallback, deps: React.DependencyList) {
    const isFirst = useRef(true)
    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false
            return
        }
        return effect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
} 