import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ViewOrder.css";

function ViewOrder() {
  return (
    <>
      <div className="admin-v-container">
        <div className="admin-v-section">
          <div className="app__bg balance-section">
            <div className="balance-box">
              <p className="headtext__cormorant" style={{ fontSize: "40px" }}>
                Your Total Balance
              </p>
              <h1 className="balance">$100</h1>
            </div>
          </div>
          <h1 className="section-title white">Orders</h1>
          <div className="admin-v-wrapper">
            {/* <img classname="empty-cart" src={images.empty_cart} alt=""/> */}
            <div className="sm-product">
              <img className="sm-p-img" src={images.sofa1} alt="" />
              <div className="sm-p-text">
                <p className="sm-p-name">Product Name</p>
                <p className="sm-p-cat">Category</p>
                <p className="sm-p-items">2</p>
              </div>
              <div className="sm-u-text">
                <p className="sm-u-name">User Name</p>
                <p className="sm-u-tid">TransactionID</p>
              </div>
              <div className="right">
                <p className="sm-p-price">$100</p>
                <i className="sm-p-del">
                  <DeleteIcon />
                </i>
                <i className="sm-p-del">
                  <CheckIcon />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewOrder;
