import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReducerBasics from './Reducer/useReducer'
import Navbar from './toolkit/components/Navbar'
import CartContainer from './toolkit/components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals, getCartItems } from './toolkit/features/cart/cartSlice'
import Modal from './toolkit/components/Modal'
import { Routing } from './Routing'
import { getPokemonDetails } from './toolkit/features/pokemon/pokemonSlice'


function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const { name } = useSelector(store => store.pokemon);
  console.log('here');
  console.log(cartItems);
  console.log(isOpen);
  console.log(name);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('We can pass params also'));
  },[]);

  // Pokemon BEGIN
  useEffect(() => {
    dispatch(getPokemonDetails(name));
  }, []);

  // Pokeomon END

  if(isLoading) {
    return (
      <h1 className='loading'>Loading...</h1>
    )
  }

  return (
    <BrowserRouter>
      <div>
        { isOpen && <Modal /> }
        <Navbar />
        <Routing />
      </div>
    </BrowserRouter>
  )
}

export default App
