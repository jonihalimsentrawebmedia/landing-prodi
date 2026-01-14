import axios, { AxiosError, AxiosHeaders, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

export interface ApiError {
  status: number
  message: string
}

export interface ApiErrorResponse {
  error: ApiError
}

const AxiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

AxiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const host = window.location.host
    const origin =
      host === 'localhost:3000' || host === '192.168.20.83:3000' || 'landing-prodi.vercel.app'
        ? 'tradis-bi.stain-madina.ac.id'
        : window.location.origin

    const headers = new AxiosHeaders({
      ...config.headers,
      Accept: 'application/json',
      'x-domain-origin': origin,
    })

    return {
      ...config,
      headers,
      withCredentials: false,
    }
  },
  (err: AxiosError) => Promise.reject(err)
)

AxiosClient.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse => {
    return res
  },
  async (error: AxiosError<ApiErrorResponse>) => {
    if (!error.response) {
      const fallback: AxiosError<ApiErrorResponse> = {
        ...error,
        response: {
          status: 500,
          statusText: 'Server Error',
          headers: {},
          config: error.config!,
          data: {
            error: {
              status: 500,
              message: 'Sorry, something went wrong on Our Server',
            },
          },
        },
      }
      return Promise.reject(fallback)
    }

    return Promise.reject(error)
  }
)

export default AxiosClient
