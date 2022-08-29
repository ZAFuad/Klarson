import React from "react";
import { FacebookRounded, Instagram } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => (
  <div className="F-Container">
    <div className="wrapper">
      <div className="left">
        <span>Follow us on</span>
        <icons>
          <FacebookRounded />
          <Instagram />
        </icons>
      </div>
      {/* <div className="right">
        <h2>Buy the best deal</h2>
      </div> */}
    </div>
  </div>
);

export default Footer;
