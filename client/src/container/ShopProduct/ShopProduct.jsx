import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store';

function ShopProduct({product}){

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const addToCartHandler = () => {
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity: 1 },
    });
  };

  return (
    <div key={product.slug} className="product-card">
      <Link to={`/product/${product.slug}`}>
        <img className="product-img" src={product.imgUrl} alt={product.name} />
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <p className="product-price">{product.price}</p>
        </div>
      </Link>
      {product.countInStock === 0 ? (
          <button className="cart_button red" disabled>
            Out of stock
          </button>
        ) : (
            <button  className="cart_button" onClick={addToCartHandler}> Add to Cart</button>
        )}
     
    </div>
  )
}

export default ShopProduct