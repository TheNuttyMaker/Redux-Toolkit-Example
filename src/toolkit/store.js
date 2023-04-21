import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';
import pokemonReducer from "./features/pokemon/pokemonSlice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
        pokemon: pokemonReducer,
    }
})