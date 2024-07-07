import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AlertProps, AlertType } from '../../types/slice'

const initialState: AlertType = {
    alert: {
        message: '',
        open: false,
        type: 'success'
    }
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (
            state,
            action: PayloadAction<AlertProps>,
        ) => {
            state.alert = action.payload
        },
    },
})
export const { showAlert } = alertSlice.actions


const alertSelector = (state: { alert:  AlertType}) => state.alert

export const selectAlert = createSelector(alertSelector, (state) => state.alert)

export default alertSlice
