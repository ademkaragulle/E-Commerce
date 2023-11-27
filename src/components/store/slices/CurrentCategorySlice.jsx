import { createSlice } from '@reduxjs/toolkit'

const CurrentCategorySlice = createSlice({
    name: 'currentCategory',
    initialState: {
        currentcategory: null,
    },
    reducers: {
        changeCurrentCategory: (state, action) => {
            state.currentcategory = action.payload
        },
    }
})

export const { changeCurrentCategory } = CurrentCategorySlice.actions
export const CurrentCategoryReducer = CurrentCategorySlice.reducer