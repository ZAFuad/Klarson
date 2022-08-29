import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getCart = () => {
      let arr = Cookies.get("cart");
      arr = JSON.parse(arr);

      if (arr && arr.length > 0) {
        let cnt = 0;
        for (var i = 0; i < arr.length; i++) {
          cnt += arr[i].price * arr[i].cartQuantity;
        }
        setTotal(cnt);
        setCartData(arr);
      }
    };
    getCart();
    console.log(cartData);
  }, [count]);
  return (
    <>
      <div className=" cart-container">
        <div className="cart-section">
          <h1 className="section-title white"> Your Items</h1>
          {cartData.map((ele, indx) => (
            <div className="cart-wrapper">
              {cartData.length===0 ? (
                <img classname="empty-cart" src={images.empty_cart} alt="" />
              ) : (
                <div className="sm-product">
                  <img className="sm-p-img" src={ele.image} alt="" />
                  <div className="sm-p-text">
                    <p className="sm-p-name">{ele.name}</p>
                    <p className="sm-p-cat">{ele.category}</p>
                  </div>
                  <div className="item-counter">
                    <button
                      className="c-btn_ dec"
                      onClick={() => {
                        const arr = cartData;
                        for (var i = 0; i < arr.length; i++) {
                          if (arr[i] === ele) {
                            console.log(ele);
                            if (parseInt(ele.cartQuantity) > 1) {
                              arr[i].cartQuantity -= 1;
                            }
                          }
                        }
                        console.log(arr);
                        Cookies.set("cart", JSON.stringify(arr));
                        setCount(count + 1);
                      }}
                    >
                      -
                    </button>
                    <p className="item-count">{ele.cartQuantity}</p>
                    <button
                      className="c-btn_ inc"
                      onClick={() => {
                        const arr = cartData;
                        for (var i = 0; i < arr.length; i++) {
                          if (arr[i] === ele) {
                            console.log(ele);
                            if (parseInt(ele.cartQuantity) >= 1) {
                              arr[i].cartQuantity += 1;
                            }
                          }
                        }
                        console.log(arr);
                        Cookies.set("cart", JSON.stringify(arr));
                        setCount(count + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="right">
                    <p className="sm-p-price">
                      ${ele.price * ele.cartQuantity}
                    </p>
                    <i
                      className="sm-p-del"
                      onClick={() => {
                        const arr = cartData;
                        // arr = arr.filter((item)=>item !==ele)
                        for (var i = 0; i < arr.length; i++) {
                          if (arr[i] === ele) {
                            arr.splice(i, 1);
                            console.log(ele);
                          }
                          Cookies.set(arr);
                          alert("Button Clicked!");
                          console.log(arr);
                        }
                      }}
                    >
                      <DeleteIcon />
                    </i>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="app__bg checkout-section">
          <div className="checkout-box">
            <p className="headtext__cormorant" style={{ fontSize: "40px" }}>
              Your Total Bill
            </p>
            <h1 className="bill">${total}</h1>
            <Link to="/Checkout">
              <button type="button" className="custom__button">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
