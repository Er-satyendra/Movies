import { store } from "../store"
import { showAlert } from "../store/Slices/Alert.slice"
import { removeStorage } from "./storage"

export const getErrors = (data: {error?: string, errors?: Record<string, string>[]}) => {
    if(data?.error){
        return data.error
    }
    return data?.errors?.map((err: Record<string, string>)=>err.msg).join(',')
}

export const showAlertMsg = (msg: string, type: 'success' | 'error' | 'warning') => {
    store.dispatch(showAlert({message: msg, open: true, type: type}))
}

export const logOut = () => {
    removeStorage('user')
    removeStorage('auth_config')
}