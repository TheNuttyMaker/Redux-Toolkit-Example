import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ReducerBasics from './Reducer/useReducer'
import Navbar from './toolkit/components/Navbar'
import CartContainer from './toolkit/components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './toolkit/features/cart/cartSlice'
import Modal from './toolkit/components/Modal'


function App() {
  // const [count, setCount] = useState(0);
  const {cartItems} = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  console.log('here');
  console.log(cartItems);
  console.log(isOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <div>
      { isOpen && <Modal /> }
      <Navbar />
      <CartContainer />

      {/* <div>
        <ReducerBasics></ReducerBasics>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR. React is beautiful.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
