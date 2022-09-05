import React, { useEffect, useState, useContext } from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import "./TopProduct.css";
import { Store } from "../../Store";
import Cookies from "js-cookie";

function TopProduct(props) {
  const [login, setLogin] = useState(false);
  const dataX = props.data;
  console.log(dataX);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const product = props.product;
  console.log(product);
  useEffect(() => {
    if (Cookies.get("x-access")) {
      setLogin(true);
    }
  });
  const addToCartHandler = () => {
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity: 1 },
    });
  };
  return (
    <>
      {dataX !== undefined ? (
        <div className="top-product">
          <h1 className="section-title">Latest Products</h1>
          <div className="top-product-container">
            {dataX.map((product) => (
              <div key={product._id} className="product-card">
                <Link to={`/product/${product._id}`}>
                  <img
                    className="product-img"
                    src={`uploads/${product.image}`}
                    alt={product.name}
                  />

                  <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>
                  </div>
                </Link>
                <button
                  className="cart_button"
                  onClick={() => {
                    console.log(product);
                    ctxDispatch({
                      type: "CART_ADD_ITEM",
                      payload: { ...product, quantity: 1 },
                    });
                    const addCart = () => {
                      console.log(product);
                      const check = Cookies.get("cart");
                      if (!check) {
                        let arr = [];
                        const data = { ...product, cartQuantity: 1 };
                        arr.push(data);
                        Cookies.set("cart", JSON.stringify(arr));
                      } else {
                        let arr = JSON.parse(check);
                        let checker = false;
                        for (var i = 0; i < arr.length; i++) {
                          if (arr[i].name === product.name) {
                            checker = true;
                          }
                        }
                        if (!checker) {
                          const data = { ...product, cartQuantity: 1 };
                          arr.push(data);
                          Cookies.set("cart", JSON.stringify(arr));
                        }
                      }
                    };
                    addCart();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>

    /* <div className="top-product">
      <h1 className="section-title"> Best Selling Products</h1>
      <div className="top-product-container">
        {data.products.map((product) => (
          <div key={product.slug} className="product-card">
            <Link to={`/product/${product.slug}`}>
              <img
                className="product-img"
                src={product.imgUrl}
                alt={product.name}
              />
           
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p> 
            </div>
            </Link>
            <button className="cart_button"> Add to Cart</button>
          </div>
          
        ))}
      </div>
    </div> */
  );
}

export default TopProduct;
