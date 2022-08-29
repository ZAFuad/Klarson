import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ShopProduct from "./ShopProduct";
import "./ShopProduct.css";
import { Store } from "../../Store";
import Cookies from "js-cookie";


const ShopProducts = (props) => {
  const dataX = props.data;
  console.log(dataX);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const product = props.product;
  console.log(product);
  const [category, setCategory] = useState([]);
  const [item, setItems] = useState([]);
  //for show all category
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/category");
      setCategory(result.data);
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
      <h1 className="section-title">Category</h1>
      <div className="category-names">
        {/* <button
          className="Sproduct-btn rounded"
          onClick={() => setCategory(products)}
        >
          All{" "}
        </button> */}
        {/* show all category if exists */}
        {category.map((item) => (
          <button
            className="Sproduct-btn rounded"
            // onClick={() => filterItem(item.title)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="top-product-container">
      {dataX.map((product) => (
          <ShopProduct product={item} key={item.slug} />
        ))}
      </div>
    </div>
    
  );
};

export default ShopProducts;
