import { createSlice } from "@reduxjs/toolkit"

// Reducer: son funciones que nos ayudan a transformar los estados que creamos.

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1
    },
    decrement: (state) => state - 1,
    incrementByAmount: (state, action) => state + action.payload,
    decrementByAmount: (state, action) => state - action.payload,
  }
})

export default counterSlice.reducer // Exportando el estado inicial y a los reducers del slice

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions // Exportamos las acciones