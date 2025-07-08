import { Provider } from 'react-redux'
import { store } from './store/store'
import { AuthInitializer } from './components/AuthInitializer'
import { AppRoutes } from './AppRoutes' // new component

export function App() {
    return (
        <Provider store={store}>
            <AuthInitializer />
            <AppRoutes />
        </Provider>
    )
}