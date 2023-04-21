import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartIcon, Testing } from "../icons";

const Navbar = () => {
  const navigate = useNavigate();
  // console.log(useSelector((store)=>{console.log(store)}));
  // const amount = useSelector((store) => store.cart.amount);
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <a
          onClick={() => {
            navigate("/");
          }}
        >
          Redux toolkit
        </a>
        <a
          onClick={() => {
            navigate("/pokemon");
          }}
        >
          Pokemon
        </a>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <div className="total-amount">{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
