import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./src/Redux/order/orderSlice";
import productSlice from "./src/Redux/product/productSlice";

export const store = configureStore({
    reducer: {
        order: orderSlice,
        products: productSlice,
    }
})

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch