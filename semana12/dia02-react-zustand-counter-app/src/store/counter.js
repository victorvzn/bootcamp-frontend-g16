import { create } from 'zustand'

export const useCounterStore = create(
  (set) => ({
    // Estado inicial
    count: 1,
    // Actions
    increment: () => {
      // ???
    },
    decrement: () => {
      // ???
    }
  })
)