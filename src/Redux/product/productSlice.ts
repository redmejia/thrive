import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store, Product } from "../../data/models/models";


export interface ProductState {
    products: Store,
}

const initialState: ProductState = {
    products: {
        list: [],
    }
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts: (state, action) => {
            state.products.list = action.payload.list
        },
        addProduct: (state, action: PayloadAction<Product>) => {

            const index = state.products.list.findIndex(product => product.id === action.payload.id)
            if (index !== -1) {
                state.products.list[index].counter = action.payload.counter + 1
            }

        },
        removeProduct: (state, action: PayloadAction<Product>) => {

            const index = state.products.list.findIndex(product => product.id === action.payload.id);

            if (index !== -1) {
                if (state.products.list[index].counter !== 0) {
                    state.products.list[index].counter = action.payload.counter - 1
                }
            }
        },
        clearProductCounter: (state) => {
            state.products.list.map(product => {
                if(product.counter > 0 ){
                    product.counter = 0
                }
                return product
            })
        },
       
    }
})

export const { loadProducts, addProduct, removeProduct, clearProductCounter } = productSlice.actions
export default productSlice.reducer