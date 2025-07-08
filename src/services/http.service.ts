import Axios, { type AxiosRequestConfig, type Method, type AxiosResponse } from 'axios'

const BASE_API_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'

const apiClient = Axios.create({
    withCredentials: true,
})

const externalClient = Axios.create({
    withCredentials: false,
})

export const httpService = {
    get<T = any>(endpoint: string, data?: Record<string, any>, external = false) {
        return ajax<T>(endpoint, 'GET', data, external)
    },
    post<T = any>(endpoint: string, data?: any, external = false) {
        return ajax<T>(endpoint, 'POST', data, external)
    },
    put<T = any>(endpoint: string, data?: any, external = false) {
        return ajax<T>(endpoint, 'PUT', data, external)
    },
    delete<T = any>(endpoint: string, data?: any, external = false) {
        return ajax<T>(endpoint, 'DELETE', data, external)
    }
}

async function ajax<T = any>(
    endpoint: string,
    method: Method = 'GET',
    data: any = null,
    external = false
): Promise<T> {
    const client = external ? externalClient : apiClient
    const url = external ? endpoint : `${BASE_API_URL}${endpoint}`
    const params = method === 'GET' ? data : null

    const options: AxiosRequestConfig = {
        url,
        method,
        data,
        params,
    }

    try {
        const res: AxiosResponse<T> = await client(options)
        return res.data
    } catch (err: any) {
        console.error(`Had Issues ${method}ing to: ${endpoint}`, data)
        console.dir(err)
        if (err.response?.status === 401 && !external) {
            sessionStorage.clear()
            window.location.assign('/')
        }
        throw err
    }
}
