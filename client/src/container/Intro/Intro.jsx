import React from 'react'
import { Link} from "react-router-dom";
import './Intro.css'


const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Every Purchase</span>
          <span>Will Be Made With Pleasure</span>
          <span>
            Buy Best Products With Best Price
          </span>
        </div>
        <Link to="/shop">
        <button className="i-button ">
          Shop Now
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Intro