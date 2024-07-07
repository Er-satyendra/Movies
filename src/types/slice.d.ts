export interface AlertType {
    alert: AlertProps
}

export interface AlertProps {
    message: string,
    open: boolean,
    type: 'success' | 'error' | 'warning'
}

export interface LoaderState {
    loading: boolean
}
