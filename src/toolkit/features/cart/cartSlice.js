import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { openModal } from "../modal/modalSlice";

const url = 'https://course-api.com/react-useReducer-cart-project';
const errorUrl = 'https://course-api.com/react-useReducer-cart-projectsss';

const initialState = {
    cartItems: [],
    amount: 1,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (weCanPassParamsHere, thunkAPI) => {
    // return fetch(url)
    // .then( response => response.json())
    // .catch(err => err);

    // Using axios
    try {
        console.log(weCanPassParamsHere);
        console.log(thunkAPI);
        console.log(thunkAPI.getState()); 
    
        // We can dispatch action from here thunkApi
        // thunkAPI.dispatch(openModal());

        const response = await axios(url);
        console.log(response);
        return response.data;
    } catch(err) {
        // To induce this error pass errorUrl to axios
        return thunkAPI.rejectWithValue('We are inducing this error');
    }
});

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
        },
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
            console.log(action);
        },
        [getCartItems.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action);
        }
    }
})

console.log(`cartSlice: ${cartSlice}`);
// exporting actions
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;