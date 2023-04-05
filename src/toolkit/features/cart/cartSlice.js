import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            // Do not return from uyourself, whatever you return will become the state of app. currently immer lib is taking care of mutation
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        increase: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            item.amount = item.amount + 1;
        },
        decrease: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            item.amount = item.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.map(item => {
                amount +=item.amount;
                total = total + item.price * item.amount;
            });
            state.amount = amount;
            state.total = total;
        }
    }
})

console.log(`cartSlice: ${cartSlice}`);
// exporting actions
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;