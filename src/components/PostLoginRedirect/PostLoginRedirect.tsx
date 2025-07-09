import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useStore'
import { storageUtils } from '../../utils/storage.utils'


const { POST_LOGIN_REDIRECT_KEY } = import.meta.env

export function PostLoginRedirect() {

    const navigate = useNavigate()
    const session = useAppSelector(state => state.authModule.session)

    useEffect(() => {
        const redirectTo = storageUtils.loadFromStorage(POST_LOGIN_REDIRECT_KEY)

        if (session && redirectTo) {
            storageUtils.removeFromStorage(POST_LOGIN_REDIRECT_KEY)
            window.history.replaceState(null, '', window.location.pathname)
            navigate(redirectTo)
        }
    }, [session])

    return null
}
