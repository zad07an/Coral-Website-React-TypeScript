import { createSlice } from "@reduxjs/toolkit";
import { productsDB } from "../../database/products-db";
import { IProducts } from "../../utilities/interfaces/interfaces";

interface IProductItems {
  productItems: IProducts[];
}

const initialState: IProductItems = {
  productItems: productsDB,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

const {} = productsSlice.actions;
export default productsSlice.reducer;
