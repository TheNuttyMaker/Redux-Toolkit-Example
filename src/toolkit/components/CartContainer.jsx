import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, amount, total } = useSelector((store) => store.cart);

    if(amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>YOUR BAG</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    } else {
        return (
            <section className="cart">
                <header>
                    <h2>YOUR BAG</h2>
                </header>
                <div>
                    {cartItems.map(item => {
                        return (<CartItem key={item.id} {...item}></CartItem>)
                    })}
                </div>
                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>total <span>${total.toFixed()}</span></h4>
                    </div>
                    <button className="btn clear-btn" onClick={() => {dispatch(openModal())}}>clear cart</button>
                </footer>
            </section>
        );
    }
}

export default CartContainer;