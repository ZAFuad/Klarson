import React, { useContext, useEffect, useState } from "react";
import images from "../../constants/images";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import CartContext from "../../contexts/CartContext";
import ProductContext from "../../contexts/ProductContext";
import { postTransaction } from "../../methods/postData";
import { Loading, Loading2 } from "../../components";
export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const nums = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const prods = useContext(ProductContext);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const getCart = () => {
      try {
        let arr = Cookies.get("cart");
        if (arr) {
          arr = JSON.parse(arr);
          if (arr && arr.length > 0) {
            let cnt = 0;
            for (var i = 0; i < arr.length; i++) {
              cnt += arr[i].price * arr[i].cartQuantity;
            }
            setTotal(cnt);
            setCartData(arr);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCart();
  }, [count]);
  const handleSubmit = async (data) => {
    setLoading(1);
    const res = await postTransaction(data);
    if (res) {
      console.log("Piiiii");
      setLoading(2);
      Cookies.remove("cart");
      window.location.href = "/";
    }
  };
  return loading === 1 ? (
    <>
      <Loading2 />
    </>
  ) : (
    <>
      <div className=" cart-container">
        <div className="cart-section">
          <h1 className="section-title white"> Your Items</h1>
          {cartData.length === 0 ? (
            <img className="empty-cart" src={images.empty_cart} />
          ) : (
            <>
              {cartData.map((ele) => (
                <>
                  <div className="cart-wrapper">
                    <div className="sm-product">
                      <img
                        className="sm-p-img"
                        src={`/uploads/${ele.image}`}
                        alt=""
                      />
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
                            let arr = cartData;
                            console.log(arr);
                            arr = arr.filter((item) => item !== ele);
                            Cookies.set("cart", JSON.stringify(arr));
                            setCartData(arr);
                            setCount(count + 1);
                            setTotal(total - ele.price * ele.cartQuantity);
                          }}
                        >
                          <DeleteIcon />
                        </i>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
        </div>
        <div className="app__bg checkout-section">
          <div className="checkout-box">
            <p className="headtext__cormorant" style={{ fontSize: "40px" }}>
              Your Total Bill
            </p>
            <h1 className="bill">${total}</h1>

            <button
              type="button"
              onClick={() => {
                setLoading(1);
                let new_arr = [];
                let arr = cartData;
                console.log(arr);
                const dt = JSON.parse(Cookies.get("user"));
                for (var i = 0; i < arr.length; i++) {
                  let x = arr[i];
                  console.log(x);
                  let y = {
                    prod_id: x._id,
                    prod_name: x.name,
                    prod_price: x.price,
                    prod_quantity: x.cartQuantity,
                    prod_category: x.category,
                    user_id: dt._id,
                    prod_image: x.image,
                  };

                  new_arr.push(y);
                }
                console.log(new_arr);
                handleSubmit(new_arr);
              }}
              className="custom__button"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
