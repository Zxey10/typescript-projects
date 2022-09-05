import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number,
    incrementAmount: number
}

const initialCounterState: CounterState = {
    value: 0,
    incrementAmount: 1
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment: (state) => {
            state.value += state.incrementAmount
        },
        decrement: (state) => {
            state.value -= state.incrementAmount
        },
        changeValue: (state,action: PayloadAction<number>) => {
            state.incrementAmount = action.payload
        }
    },
    extraReducers: {

    }
})

export const { increment, decrement, changeValue } = counterSlice.actions
export default counterSlice