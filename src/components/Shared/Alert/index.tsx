import { useEffect } from 'react'
import { useAppDispatch } from '../../../store/Hooks'
import { showAlert } from '../../../store/Slices/Alert.slice'
import './Alert.scss'

const Alert: React.FC<AlertModel> = ({ state }: AlertModel) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (state?.open) {
            setTimeout(() => {
                dispatch(showAlert({ open: false, message: '', type: 'success' }))
            }, 3000);
        }
    }, [state?.open])

    const getTypeOfAlert = (type: string) => {
        if(type === 'success' || type === 'warning')
        return type

        return 'danger'
    }
    
    return (
        <>
            {state?.open && <div className={`alert alert-${getTypeOfAlert(state.type)}`} role="alert">
                {state?.message}
            </div>}
        </>

    )
}

export default Alert