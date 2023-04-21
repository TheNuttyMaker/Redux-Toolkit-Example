import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useDispatch } from "react-redux";

const url = 'https://pokeapi.co/api/v2/pokemon/';

const initialState = {
    pokemon: {
        id: null,
        name: 'pikachu',
        height: 4,
        weight: 60,
        base_experience: 112,
        sprites: {
            other: {
                dream_world: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png'
                }
            }
        }
    },
    name: 'raichu',
    isLoading: false

};

export const getPokemonDetails = createAsyncThunk('getPokemonDetails', async (pokemonName, thunkApi) => {
    try {
        console.log(pokemonName);
        const response = await axios(`${url}${pokemonName}`);
        console.log(response);
        return response.data;
    }
    catch(err) {
        return thunkApi.rejectWithValue('Error: '+err);
    }
})

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        getPokemonName: (state, action) => {

            console.log('pokemon state');
            console.log(state.pokemon);
            state.name = action.payload;
            console.log(state.pokemon);

            // dispatch(getPokemonDetails(state.name));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPokemonDetails.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
            state.pokemon = action.payload;
            state.isLoading = false;
        }),
        builder.addCase(getPokemonDetails.rejected, (state) =>{
            state.isLoading = false;
        })
    }
});

export const { getPokemonName } = pokemonSlice.actions;
export default pokemonSlice.reducer;