import { configureStore } from '@reduxjs/toolkit'
import ProductsDataReducer from './slices/ProductSlice'

export default configureStore({
    reducer: {
        productDatas: ProductsDataReducer
    }
})