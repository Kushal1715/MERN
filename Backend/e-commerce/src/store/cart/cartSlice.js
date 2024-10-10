import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

      if (!existingItem) {
        state.cartItems.push(item);
      }
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer