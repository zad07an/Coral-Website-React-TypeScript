import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart-slice";
import productsReducer from "../features/products-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
