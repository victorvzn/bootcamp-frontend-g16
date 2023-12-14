import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    // { id: 1, title: 'product 1'},
    // { id: 2, title: 'product 2'},
  ],
  reducers: {
    addToCart: (state, action) => {
      // console.log('AddToCart')
      const newProduct = action.payload

      return [
        ...state,
        {
          ...newProduct,
          quantity: 1
        }
      ]
    },
    removeToCart: (state, action) => {
      // console.log('removeToCart')
      const productId = action.payload

      return state.filter(product => product.id !== productId)      
    },
    clearCart: (state) => {
      console.log('clearCart')
      return []
    }
  }
})

export default cartSlice.reducer // Exportando al estado inicial y a los reducers del slice

export const { addToCart, removeToCart, clearCart } = cartSlice.actions