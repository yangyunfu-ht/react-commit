import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store'


interface CounterState {
  value: number;
}

const initialState: CounterState  = {
  value: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },

    decrement: (state) => {
      state.value--
    },

    changeCounterValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})


export const { increment, decrement, changeCounterValue } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;