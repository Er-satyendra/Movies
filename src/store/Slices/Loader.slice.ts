import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoaderState } from '../../types/slice'

const initialState: LoaderState = {
  loading: false,
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setLoader } = loaderSlice.actions

const loaderSelector = (state: { loader: LoaderState }) => state.loader

export const selectLoader = createSelector(loaderSelector, (state) => state.loading)

export default loaderSlice
