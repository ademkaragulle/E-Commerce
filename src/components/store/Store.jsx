import { configureStore } from '@reduxjs/toolkit'
import { getProductReducer } from './slices/ProductSlice'
import { getcategoryReducer } from './slices/CategorySlice'
import { CurrentCategoryReducer } from './slices/CurrentCategorySlice'

export const store = configureStore({
    reducer: {
        product: getProductReducer,
        category: getcategoryReducer,
        currenCategory: CurrentCategoryReducer,
    }
})