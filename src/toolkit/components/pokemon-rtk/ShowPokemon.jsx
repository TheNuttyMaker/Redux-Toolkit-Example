import { useSelector } from "react-redux"
import { SearchPokemon } from "./SearchPokemon"
import  "./ShowPokemon.css"

export const ShowPokemon = () => {
    const {pokemon, name , isLoading } = useSelector((store) => store.pokemon);
    return (
        <div style={{margin: '40px'}}>
            <SearchPokemon />
            {isLoading && <h3>Loading API</h3>}
            <div className="result">
                <div className="pokemon-details">
                    <strong>name</strong>: {name} <br />
                    <strong>height</strong>: {pokemon.height} <br />
                    <strong>weight</strong>: {pokemon.weight} <br />
                    <strong>Battles won</strong>: {pokemon.base_experience} <br />
                </div>
                <img className="pokemon-image" src={pokemon?.sprites?.other?.dream_world?.front_default} alt="image"/>
            </div>
        </div>
    )
}