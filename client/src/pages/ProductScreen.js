import React, { useContext, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import images from "../constants/images";
import data from "../constants/data";
import { Review } from "../container";
import { AddReview, Rating, Loading } from "../components";
import "../App.css";
import "../App.css";
import axios from "axios";
import { Store } from "../Store";
import CartContext from "../contexts/CartContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const cartNum = useContext(CartContext);
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      //setProducts(result.data);
    };
    fetchData();
  }, [slug]);

  
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const addToCartHandler = () => {
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity: 1 },
    });
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="Sproduct-detail">
        <img src={product.imgUrl} className="Sproduct-img" alt={slug} />
        <div className="Sdetail-info">
          <h1 className="Sproduct-title">{slug}</h1>
          <p className="Sproduct-des">{product.description}</p>
          <div className="Sratings">
            <Rating rating={product.rating} />
            <span className="Srating-count">{product.numReviews}</span>
          </div>
          <p className="Sproduct-price">BDT {product.price}</p>
          <div className="Sbtn-container">
            <button className="Sproduct-btn">Buy Now</button>
            <button onClick={addToCartHandler} className="Sproduct-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Review />
      <AddReview />
    </>
  );
}

export default ProductScreen;
