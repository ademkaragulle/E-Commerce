import { configureStore } from '@reduxjs/toolkit'
import { getProductReducer } from './slices/ProductSlice'
import { getcategoryReducer } from './slices/CategorySlice'

export const store = configureStore({
    reducer: {
        product: getProductReducer,
        category: getcategoryReducer,
    }
})