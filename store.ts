import { configureStore } from "@reduxjs/toolkit";
import totalSlice from "./src/Redux/total/totalSlice";

export const store = configureStore({
    reducer : {
        total: totalSlice
    }
})

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch