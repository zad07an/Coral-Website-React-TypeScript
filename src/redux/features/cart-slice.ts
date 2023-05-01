import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItems, IProducts } from "../../utilities/interfaces/interfaces";

interface IInitialState {
  cartItems: ICartItems[];
  cartAmount: number;
  cartTotal: number;
}

const initialState: IInitialState = {
  cartItems: [],
  cartAmount: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProducts>) => {
      state.cartItems.push({ ...action.payload, quantity: 1 });
      state.cartAmount += 1;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item: IProducts) => item?.id !== action.payload
      );
      state.cartAmount -= 1;
    },
    cartItemIncrement: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item?.id === action.payload
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    cartItemDecrement: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item?.id === action.payload
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity -= 1;
      }
    },
    cartItemsTotalPrice: (state) => {
      state.cartTotal = state.cartItems.reduce(
        (total: number, item: ICartItems) => {
          return (total += item.price * item.quantity);
        },
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  cartItemIncrement,
  cartItemDecrement,
  cartItemsTotalPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
