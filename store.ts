import { configureStore } from "@reduxjs/toolkit";
import totalSlice from "./src/Redux/total/totalSlice";
import productSlice from "./src/Redux/product/productSlice";

export const store = configureStore({
    reducer : {
        total: totalSlice,
        products: productSlice,
    }
})

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch