import axios from 'axios';
import ERROR_MESSAGES from '../constants/Messages';
import ROUTES from '../constants/Routes';
import { store } from '../store';
import { setLoader } from '../store/Slices/Loader.slice';
import { getErrors, logOut, showAlertMsg } from '../utilities';
import { getStorage } from '../utilities/storage';

const axiosInstance = axios.create({
    baseURL: 'http://45.59.167.43:5353/api'
});

axiosInstance.interceptors.request.use(
    (config) => {
        const initialHeader = config.headers['Content-Type']
        const configCopy = { ...config }
        configCopy.headers['Content-Type'] = initialHeader || 'application/json'
        if (!configCopy.headers['authorization']) {
            const token = getStorage<string>('auth_config')
            if (token) configCopy.headers['Authorization'] = `Bearer ${token}`
        }
        return configCopy
    },
    (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
    function (response) {
        return response?.data
    },
    function (error) {
        switch (error?.response?.status) {
            case 401:
                showAlertMsg(ERROR_MESSAGES.INTERNAL_SERVER, 'error')
                window.location.href = (ROUTES.LOGIN)
                logOut()
                break
            case 500:
                showAlertMsg(ERROR_MESSAGES.NOT_AUTHORIZED, 'error')
                break
        }
        if (error?.response?.data) throw getErrors(error?.response?.data)
        throw error
    },
)



const mainApiService = async <T = any, R = any>({
    url,
    method,
    data,
    showAlert,
    headers
}: APIProps<T>) => {
    store.dispatch(setLoader(true))
    try {
        const result: R = await axiosInstance({
            url: url,
            method,
            data,
            headers,
        });
        store.dispatch(setLoader(false))
        const response = { ...result } as Record<string, string>
        if (response?.message && showAlert) {
            showAlertMsg(response?.message, 'success')
        }
        return result;
    } catch (axiosError) {
        store.dispatch(setLoader(false))
        if (axiosError) {
            showAlertMsg(axiosError as string, 'error')
        }
        return false
    }
};

export default mainApiService;