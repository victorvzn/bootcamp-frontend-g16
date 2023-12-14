// PASO-01: Creamos un store

import { configureStore } from "@reduxjs/toolkit"

import { createSlice } from "@reduxjs/toolkit"

// Reducer: son funciones que nos ayudan a transformar los estados que creamos.

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1
    },
    decrement: (state) => state - 1
  }
})

export const { increment, decrement } = counterSlice.actions // Exportamos las acciones

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer // Exportando el estado inicial y a los reducers del slice
  }
})