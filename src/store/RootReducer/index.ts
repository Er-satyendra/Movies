import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "../Slices/Alert.slice";
import loaderSlice from "../Slices/Loader.slice";

export const rootReducer = combineReducers({
  [loaderSlice.name]: loaderSlice.reducer,
  [alertSlice.name]: alertSlice.reducer,
})
