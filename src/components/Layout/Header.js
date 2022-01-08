import "./Header.css";
import { Fragment } from "react";
import imageMeal from "../../assets/makaroncake.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className="header">
        <h1>Dat Meals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={imageMeal} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header;
