import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Order } from "../../data/models/models";


export interface CheckOutState {
    order: Order;
}

const initialState: CheckOutState = {
    order: {
        cart: [],
        total: 0,
    }
}


export const orderSlice = createSlice({
    name: 'total',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<Cart>) => {
            state.order.cart.push(action.payload)
            state.order.total += action.payload.price
        },
        removeItemFromCart: (state, action: PayloadAction<string | number>) => {
            const idx = state.order.cart.findIndex(item => item.id === action.payload)
            if (idx !== -1) {
                state.order.total -= state.order.cart[idx].price
                state.order.cart.splice(idx, 1);
            }
        },
        resetOrderCart : (state) => {
            state.order.cart = []
            state.order.total = 0
        } 
    }
})

export const { removeItemFromCart, addItemToCart, resetOrderCart } = orderSlice.actions

export default orderSlice.reducer