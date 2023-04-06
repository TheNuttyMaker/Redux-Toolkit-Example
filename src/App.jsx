import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ReducerBasics from './Reducer/useReducer'
import Navbar from './toolkit/components/Navbar'
import CartContainer from './toolkit/components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals, getCartItems } from './toolkit/features/cart/cartSlice'
import Modal from './toolkit/components/Modal'


function App() {
  // const [count, setCount] = useState(0);
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  console.log('here');
  console.log(cartItems);
  console.log(isOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('We can pass params also'));
  },[]);

  if(isLoading) {
    return (
      <h1 className='loading'>Loading...</h1>
    )
  }

  return (
    <div>
      { isOpen && <Modal /> }
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default App
