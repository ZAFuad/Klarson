import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Error.css'

function Error_() {
  const { search } = useLocation();
  const redirectInURL = new URLSearchParams(search).get("redirect");
  const redirect = redirectInURL ? redirectInURL : "/";
  return (
    <>
      <div className="error">
        <h1 className="e-txt">Page Doen't Exit</h1>
        <Link to={`/?redirect=${redirect}`} className="Lother-form-link">
          Look Like You Are Lost!! Visit Our <span>Home Page</span>
        </Link>
      </div>
    </>
  );
}

export default Error_;
