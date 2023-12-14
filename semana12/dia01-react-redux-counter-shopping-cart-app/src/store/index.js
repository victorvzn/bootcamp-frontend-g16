// PASO-01: Creamos un store

import { configureStore } from "@reduxjs/toolkit"

import counterReducer from '../store/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})