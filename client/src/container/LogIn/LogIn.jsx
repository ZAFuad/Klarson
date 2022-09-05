import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import images from "../../constants/images";
import { loginUser } from "../../methods/postData";
import { ToastContainer, toast } from 'react-toastify';
import "./LogIn.css";
import Cookies from "js-cookie";

const LogIn = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const redirectInURL = new URLSearchParams(search).get("redirect");
  
  const [admin, setAdmin] = useState(false);
  const redirect = redirectInURL ? redirectInURL : "/";
  const [data, setData] = useState(undefined);
  const handleClick = async () => {
    try {
      if (data && data.email && data.password) {
        const res = await loginUser(data);
        if (res) {
          Cookies.set('user',JSON.stringify(res))
          Cookies.set("x-access", true);
          console.log("sign in successfull");
          if(Cookies.get('user')){
            if(JSON.parse(Cookies.get("user")).isAdmin){
              setAdmin(true)
            }
          }
          console.log(admin)
          if(admin)
          {
            navigate("/adminpage");
          window.location.reload()
          }
          else{
            navigate("/");
            window.location.reload()
          }
          
        } else {
          toast.error("Credintials error")
          console.log(res);
        }
      } else {
        toast.error("Credintials error")
        alert("Credintials error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <img src={images.loader} className="Lloader" alt="" />
      <div className="Lform-section">
        <div className="Lform-container">
          <div
            className="Lform"
            onChange={(e) => {
              setData({ ...data, [e.target.id]: e.target.value });
            }}
          >
            <h1 className="Lform-title">Welcome Back, Log In</h1>
            <input
              type="email"
              autoComplete="off"
              id="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              autoComplete="off"
              id="password"
              placeholder="Password"
              required
            />
            <span className="Lerror show">**This is an error</span>
            <button onClick={handleClick} className="Sproduct-btn rounded">
              Log In
            </button>
            <Link
              to={`/signup?redirect=${redirect}`}
              className="Lother-form-link"
            >
              Don't have an account!! <span>Sign Up here</span>
            </Link>
          </div>
          <img className="Lform-img" src={images.login} alt="" />
        </div>
      </div>
    </>
  );
};

export default LogIn;
