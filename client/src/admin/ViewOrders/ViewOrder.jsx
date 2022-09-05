import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ViewOrder.css";
import { getPrev, getProfileAdmin, getProfileSupplier, getTransaction } from "../../methods/getData";

function ViewOrder() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await getTransaction();
  //       if (res) {
  //         console.log(res);
  //         setData(res);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getData();
  // }, []);
  // console.log();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProfileSupplier();
        const res2 = await getTransaction();
        console.log(res);
        console.log(res2);
        Promise.all([res, res2]).then(() => {
          if (res2 && res) {
            setData(res);
            setOrder(res2);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className="admin-v-container">
        <div className="admin-v-section">
          <div className="app__bg balance-section">
            <div className="balance-box">
              <p className="headtext__cormorant" style={{ fontSize: "40px" }}>
                Your Total Balance
              </p>
              <h1 className="balance">BDT {data.balance}</h1>
            </div>
          </div>
          <h1 className="section-title">Orders</h1>
          {order.map((ele) => (
            <div className="admin-v-wrapper">
              {/* <img classname="empty-cart" src={images.empty_cart} alt=""/> */}
              <div className="sm-product">
                <img
                  className="sm-p-img"
                  src={`uploads/${ele.prod_image}`}
                  alt=""
                />
                <div className="sm-p-text">
                  <p className="sm-p-name">{ele.prod_name}</p>
                  <p className="sm-p-items">Quantity: {ele.prod_quantity}</p>
                </div>
                <div className="sm-u-text">
                  <p className="sm-u-name">User id {ele.user_id}</p>
                  <p className="sm-u-tid">TransactionID {ele._id}</p>
                </div>
                <div className="right">
                  <p className="sm-p-price">BDT {ele.prod_price}</p>
                  {/* <i className="sm-p-del">
                  <DeleteIcon />
                </i>
                <i className="sm-p-del">
                  <CheckIcon />
                </i> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewOrder;
