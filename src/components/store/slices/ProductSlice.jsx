import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const url = 'https://api.escuelajs.co/api/v1/products/'
export const getProduct = createAsyncThunk("getProduct", async (categoryId = "sad") => {
    console.log(categoryId)
    const categoryUrl = url + (categoryId ? "?categoryId=" + categoryId : "")
    console.log(categoryUrl)
    const response = await fetch(categoryUrl);
    const Product = await response.json();
    return Product
})


const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: null,
        loading: false,
        error: "",
    },

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        });
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error Fetching Movies Data"
        })
    }
})


export const getProductReducer = ProductSlice.reducer