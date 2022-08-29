import React, { useState } from "react";
import { Link, useLocation, useHistory, useNavigate } from "react-router-dom";
import images from "../../constants/images";
import { registerUser } from "../../methods/postData";

const SignUp = () => {
  const { search } = useLocation();
  const history = useNavigate();
  const redirectInURL = new URLSearchParams(search).get("redirect");
  const redirect = redirectInURL ? redirectInURL : "/";
  const [data, setData] = useState(undefined);
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleSubmit = async () => {
    const res = await registerUser(data);
    if (res) {
      history("/");
    }
  };
  return (
    <>
      <div className="form-section">
        <div className="form-container">
          <img className="form-img" src={images.formbg} alt="" />
          <div className="form" onChange={(e) => handleChange(e)}>
            <h1 className="form-title">New here, Sign Up</h1>
            <input
              type="text"
              autoComplete="off"
              id="name"
              placeholder="Full Name"
              required
            />
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
            <input
              type="tel"
              autoComplete="off"
              id="number"
              placeholder="Phone Number"
              required
            />
            {/* <span className="error show">**This is an error</span> */}
            {/* <div>
              <input
                type="checkbox"
                autoComplete="off"
                className="checkbox"
                id="tc"
              />
              <label for="tc">You agree to our </label>{" "}
              <Link to="/terms">terms and conditions</Link>
            </div> */}
            <button onClick={handleSubmit} className="Sproduct-btn rounded">
              Sign Up
            </button>
            <Link
              to={`/signin?redirect=${redirect}`}
              className="other-form-link"
            >
              Already have an account!! <span>Log in here</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
