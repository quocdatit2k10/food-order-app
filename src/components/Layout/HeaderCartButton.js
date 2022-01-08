import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

function HeaderCartButton(props) {
  return (
    <button className="header-cart-button">
      <span className="header-cart-button__icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="header-cart-button__badge">3</span>
    </button>
  );
}

export default HeaderCartButton;
