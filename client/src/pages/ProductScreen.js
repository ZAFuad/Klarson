import React, { useContext, useEffect, useReducer, useState } from "react";
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
import { getProductInfo } from "../methods/getData";
import Cookies from "js-cookie";

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
  const [loading ,setLoading] = useState(true);
  const [product ,setProduct] =useState([]);
  // const [{ loading, error, product }, dispatch] = useReducer(reducer, {
  //   product: [],
  //   loading: true,
  //   error: "",
  // });

  useEffect(() => {
    const getData = async (req,res)=>{
      try{  
        const res= await getProductInfo(slug);
        if(res){
          setLoading(false)
          setProduct(res);
        }

      }
      catch(err){
        console.log(err)
      }
    }
    getData();
  }, []);

  
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
        <img src={`/uploads/${product.image}`} className="Sproduct-img" alt=""/>
        <div className="Sdetail-info">
          <h1 className="Sproduct-title">{product.name}</h1>
          <p className="Sproduct-des">{product.description}</p>
          <div className="Sratings">
            <Rating rating={product.rating} />
            <span className="Srating-count">{product.numReviews}</span>
          </div>
          <p className="Sproduct-price">BDT {product.price}</p>
          <div className="Sbtn-container">
            <button onClick={() => {
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
                  }}className="Sproduct-btn">
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
