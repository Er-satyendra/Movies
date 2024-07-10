interface ErrorProps {
    message: string
    response: {
        data: string | Record<string, string>
    }
}

type Methods = 'get' | 'post' | 'put' | 'patch' | 'delete'

interface APIProps<T> {
    url: string;
    method: Methods;
    data?: T;
    showAlert: boolean
}
interface APIProps<T> {
    url: string;
    method: Methods;
    data: Record<string, T>;
    headers?: AxiosRequestConfig['headers']
}

interface ResponseWithMessageProps {
    message: string
}