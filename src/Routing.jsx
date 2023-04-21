import { Route, Routes } from 'react-router-dom';
import CartContainer from './toolkit/components/CartContainer';
import { NoPageFound } from './toolkit/components/NoPageFound';
import { ShowPokemon } from './toolkit/components/pokemon-rtk/ShowPokemon';

export const Routing = () => {
    return (
            <Routes>
                <Route path="/" element={<CartContainer />} />
                <Route path="/pokemon" element={<ShowPokemon />} />
                <Route path="*" element={<NoPageFound />} />
            </Routes>
    );
}