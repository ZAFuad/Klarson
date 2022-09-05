import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPrev, getProfileAdmin, getTransaction, getUsersAll } from "../../methods/getData";
import './Admin.css'

function AdminPage() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProfileAdmin();
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
        <div className="admin-container">
        <div className="app__bg balance-section">
            <div className="balance-box">
              <p className="headtext__cormorant" style={{ fontSize: "40px" }}>
                Your Total Balance
              </p>
              <h1 className="balance">BDT {data.balance}</h1>
            </div>
          </div>
            <div className="admin-wrapper">
                <div className="admin-card">
                    <div className='admin-upper'>
                    <h1>2</h1>
                    </div>
                    <h1 className='admin-h'>Number of Users</h1>
                </div>
                <div className="admin-card">
                    <div className='admin-upper'>
                    <h1>7</h1>
                    </div>
                    <h1 className='admin-h'>Number of Products</h1>
                </div>
                <div className="admin-card">
                    <div className='admin-upper'>
                    <h1>2</h1>
                    </div>
                    <h1 className='admin-h'>Number of Orders</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminPage