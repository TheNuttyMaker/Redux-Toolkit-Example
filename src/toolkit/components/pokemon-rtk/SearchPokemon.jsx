import { useDispatch, useSelector } from "react-redux"
import { getPokemonDetails, getPokemonName } from "../../features/pokemon/pokemonSlice";
import "./SearchPokemon.css";

export const SearchPokemon = () => {
    let name = useSelector(store => store.pokemon.name)
    const dispatch = useDispatch();
    return (
        <div className="container">
            <input
                className="search-input"
                type="text"
                defaultValue={name}
                onChange={event => name = event.target.value}
            />


            <button className="search-button" onClick={() => {dispatch(getPokemonName(name)); dispatch(getPokemonDetails(name))}}>Search </button>
        </div>
    )
}