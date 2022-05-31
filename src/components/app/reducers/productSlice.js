import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    basketProducts: [],
    number: 0,
    totalAmount: 0
  },
  reducers: {
    addToBasket: (state, action) => {
      const uuid = uuidv4();
      const product = action.payload;
      state.basketProducts.push({ uuid, ...product });;
    },
    addNumberToBasket: (state) => {
      state.number = state.basketProducts.length;
    },
    addTotalAmount: (state) => {
      state.totalAmount = state.basketProducts.reduce((accum, item) => {
        return accum += Number(item.price);
      }, 0);
    },
    deleteFromBasket: (state, action) => {
      state.basketProducts = state.basketProducts.filter((item) => item.uuid !== action.payload);
      state.number = state.basketProducts.length;
      state.totalAmount = state.basketProducts.reduce((accum, item) => {
        return accum += Number(item.price);
      }, 0);

    }
  },
})

export const { addToBasket, addNumberToBasket, addTotalAmount, deleteFromBasket } = productSlice.actions;
export default productSlice.reducer;