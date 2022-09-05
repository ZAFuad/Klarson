import React, { useContext, useEffect, useState } from "react";
import images from "../../constants/images";
import "./Navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import Cookies from "js-cookie";

function Navbar() {
  const { state } = useContext(Store);
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [supplier, setSupplier] = useState(false);
  const { cart } = state;

  console.log(state);
  let arr = Cookies.get("user");
  console.log(arr);

  useEffect(() => {
    if (Cookies.get("x-access")) {
      setLogin(true);
    }
    if (Cookies.get("user")) {
      if (JSON.parse(Cookies.get("user")).name === "admin"){
        setAdmin(true);
      } else if (JSON.parse(Cookies.get("user")).name === "supplier") {
        setSupplier(true);
      }
    }
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={images.logo} alt="App Logo" />
          </Link>
        </div>
        {admin || supplier ? (
          admin ? (
            <ul className="nav-links">
              <li className="p__opensans">
                <NavLink to="/adminpage" activeClassName="active">
                  Admin_View
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="nav-links">
              <li className="p__opensans">
                <NavLink to="/vieworder" activeClassName="active">
                  View Order
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink to="/addproduct" activeClassName="active">
                  Add Product
                </NavLink>
              </li>
            </ul>
          )
        ) : (
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
        )}
        <div className="user-interaction">
          {!login ? (
            <Link to="/signin">
              <div className="user">
                <AccountCircleOutlinedIcon className="user-icon" />
              </div>
            </Link>
          ) : (
            <>
              <Link to="/cart">
                <div className="cart">
                  <ShoppingCartOutlinedIcon className="cart-icon" />
                </div>
              </Link>
              <Link to="/profilepage">
                <div className="user">
                  <AccountCircleOutlinedIcon className="user-icon" />
                </div>
              </Link>

              <div
                onClick={() => {
                  Cookies.remove("user");
                  Cookies.remove("x-access");
                  window.location.href = "/";
                }}
                className="user"
              >
                <LogoutRoundedIcon className="user-icon" />
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
