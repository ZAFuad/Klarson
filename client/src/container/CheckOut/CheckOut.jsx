import React from 'react'
import { Link } from 'react-router-dom'
import './CheckOut.css'

function CheckOut() {
  return (
    <div className="checkout-form">
      <div className="w-left">
        <div className="awesome">
          <span></span>
          <span>Check Out</span>
        </div>
      </div>

      <div className="c-right">
        <form>
          <input type="text" name="address" className="address" placeholder="Address" />
          <div className="add-info">
          <input type="text" name="street" className="address-i" placeholder="Street" />
          <input type="text" name="city" className="address-i" placeholder="City" />
          </div>
          <div className="add-info">
          <input type="text" name="state" className="address-i" placeholder="State" />
          <input type="text" name="pincode" className="address-i" placeholder="Pincode" />
          </div>

          <input type="submit" value="Send" className="Sproduct-btn" />

        </form>
      </div>
    </div>
  )
}

export default CheckOut