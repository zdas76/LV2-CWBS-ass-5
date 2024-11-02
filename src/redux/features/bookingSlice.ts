import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TSlot } from "../../types/Slots";

export type TItem = {
  id: string;
  quantity: number;
};
type TInitialState = {
  carts: TSlot[];
};
const initialState: TInitialState = {
  carts: [],
};

const bookingSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<TSlot>) => {
        state.carts.push({ ...action.payload  });
      },
  
      productQuantity: (
        state,
        action: PayloadAction<{ id: string; quantity: number }>
      ) => {
        const res = state.carts.find((item) => item._id === action.payload.id);
        console.log(res);
        // res!.quantity = action.payload.quantity;
      },
  
      deleteItem: (state, action: PayloadAction<{ id: string }>) => {
        state.carts = state.carts.filter(
          (item) => item._id !== action.payload.id
        );
      },
  
      clearCart: (state) => {
        state.carts = [];
      },
    }
})



export const {addToCart, productQuantity, clearCart, deleteItem  } = bookingSlice.actions;

export default bookingSlice.reducer;

export const currentToken = (state: RootState) => state.auth.token;
export const currentUser = (state: RootState) => state.auth.user;
