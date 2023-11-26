import { createSlice } from '@reduxjs/toolkit'



export const ProductSlice = createSlice({
    name: 'Product',
    initialState: {
        value: 5
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
})


export const { increment, incrementByAmount } = ProductSlice.actions

export default ProductSlice.reducer