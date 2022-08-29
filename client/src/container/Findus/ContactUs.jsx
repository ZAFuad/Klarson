import React from "react";
import "./Contact.css";


const ContactUs = () => {

  return (
    <div className="contact-form" id="contact">

      <div className="w-left">
        <div className="awesome">
          <span>For Any Kind Of Issue or Help</span>
          <span>Contact Us</span>
        </div>
      </div>

      <div className="c-right">
        <form>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="Sproduct-btn" />
        </form>
      </div>
    </div>
  );
}


export default ContactUs;