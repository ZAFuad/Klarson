import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../../contexts/ProductContext'
import './CheckOut.css'
import Cookies from 'js-cookie'
function CheckOut() {
  const prods = useContext(ProductContext);
  // console.log(JSON.parse(Cookies.get('orders')))
  const data = prods.productData;
  const [info ,setInfo] = useState([])
  return (
    <div className="checkout-form">
      <div className="w-left">
        <div className="awesome">
          <span></span>
          <span>Check Out</span>
        </div>
      </div>

      <div className="c-right" onChange={()=>{

      }}>
        <form>
          <input id ='address' type="text" name="address" className="address" placeholder="Address" />
          <div  className="add-info">
          <input type="text" name="street" className="address-i" placeholder="Street" />
          <input type="text" name="city" className="address-i" placeholder="City" />
          </div>
          <div className="add-info">
          <input type="text" name="state" className="address-i" placeholder="State" />
          <input type="text" name="pincode" className="address-i" placeholder="Pincode" />
          </div>

          <input type="submit" value="Send" className="Sproduct-btn" onClick={()=>{
              let arr= []
              for(var i = 0 ;i<data.length ; i++){
                    
              }
          }}/>

        </form>
      </div>
    </div>
  )
}

export default CheckOut