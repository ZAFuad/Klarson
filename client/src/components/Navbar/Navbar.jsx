import React, { useContext } from "react";
import images from "../../constants/images";
import "./Navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, NavLink } from "react-router-dom";
import { Store } from "../../Store";

function Navbar() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={images.logo} alt="App Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="p__opensans">
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="p__opensans">
            <NavLink to="/shop" activeClassName="active">
              Products
            </NavLink>
          </li>
          <li className="p__opensans">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="p__opensans">
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="user-interaction">
          <Link to="/cart">
            <div className="cart">
              <ShoppingCartOutlinedIcon className="cart-icon" />
              <span className="cart-item-count">{cart.cartItems.length}</span>
            </div>
          </Link>
          <Link to="/signin">
            <div className="user">
              <AccountCircleOutlinedIcon className="user-icon" />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
