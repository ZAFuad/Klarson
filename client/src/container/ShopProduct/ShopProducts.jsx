import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import ShopProduct from "./ShopProduct";
import "./ShopProduct.css";
import { Store } from "../../Store";
import Cookies from "js-cookie";
import { getProduct } from "../../methods/getData";

function ShopProducts(props) {
  const [dataX, setDataX] = useState([]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const [category, setCategory] = useState([]);
  const [item, setItems] = useState([]);
  const product = props.product;
  console.log(product);

  //for show all category
  useEffect(() => {
    const fetchData = async () => {
      const res = await getProduct();
      if (res.length > 0) {
        setDataX(res);
      } else {
        setDataX([]);
      }
    };
    fetchData();
  }, []);

  //filter and all products

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       dispatch({ type: "FETCH_REQUEST" });
  //       try {
  //         const result = await axios.get("/api/products");
  //         dispatch({ type: "FETCH_SUCCESS", payload: result.data });
  //       } catch (err) {
  //         dispatch({ type: "FETCH_FAIL", payload: err.message });
  //       }

  //       //setProducts(result.data);
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div className="shop-product">
      <h1 className="section-title">All Products</h1>
      <div className="category-names">
        {/* <button
          className="Sproduct-btn rounded"
          onClick={() => setCategory(products)}
        >
          All{" "}
        </button> */}
        {/* show all category if exists */}
        {/* {category.map((item) => (
          <button
            className="Sproduct-btn rounded"
            // onClick={() => filterItem(item.title)}
          >
            {item.title}
          </button>
        ))} */}
      </div>
      <div className="top-product-container">
        {dataX.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`}>
              <img
                className="product-img"
                src={`/uploads/${product.image}`}
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
  );
}

export default ShopProducts;
