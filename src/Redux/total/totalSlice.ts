import { createSlice } from "@reduxjs/toolkit";


export interface TotalState {
    total : number;
}

const initialState: TotalState = {
    total : 0
}


export const totalSlice = createSlice({
    name:'total',
    initialState,
    reducers: {
        increment: (state) => {
            state.total += 1
          },
          decrement: (state) => {
            state.total -= 1
          },
    }
})

export const {decrement, increment} = totalSlice.actions

export default totalSlice.reducer