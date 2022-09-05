import React, { useEffect, useState } from "react";
import images from "../constants/images";
import "../admin/ViewOrders/ViewOrder.css";
import { Divider } from "@mui/material";
import { getPrev, getProfile } from "../methods/getData";

function ProfilePage() {
  const [data, setData] = useState(undefined);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProfile();
        const res2 = await getPrev();
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
      {data !== undefined ? (
        <div className="pp-container">
          <div className="pp-wrapper">
            <div className="pp-left">
              <img className="user-dp" src={images.user1} alt="" />
              <div className="pp-text">
                <h1 className="pp-name" style={{ "margin-top": "2.5rem" }}>
                  {data.account_name}
                </h1>
                <h2 className="pp-balance" style={{ paddingTop: "1.5rem" }}>
                  Current Account Balance: BDT {data.balance}
                </h2>
              </div>
            </div>
            <>
              
                <div className="pp-right">
                  <h1
                    style={{
                      paddingInlineStart: "3.1rem",
                      paddingBottom: "2rem",
                    }}
                  >
                    {" "}
                    Previous Orders{" "}
                  </h1>
                  {order.map((ele) => (
                  <div
                    className="sm-product"
                    style={{ paddingBottom: "1rem", gap: "1rem" }}
                  >
                    <img
                      className="sm-p-img"
                      src={`uploads/${ele.prod_image}`}
                      alt=""
                    />
                    <div className="sm-p-text">
                      <p className="sm-p-name">{ele.prod_name} </p>
                      <p className="sm-p-cat">{ele.prod_category}</p>
                    </div>
                    <div className="sm-u-text">
                      <p className="sm-u-name">
                        Number of item: {ele.prod_quantity}
                      </p>
                      <p className="sm-u-tid">TransactionID {ele.prod_id}</p>
                    </div>
                    
                  </div>
                  
                   ))}
                  
                </div>
             
            </>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProfilePage;
