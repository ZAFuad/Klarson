import React from 'react';
import images from '../../constants/images'
import "../../App.css";
 

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Hatil Tower, Floor no-07, Shop no-12, East Zindabazar, Sylhet</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 11:00 pm</p>
        <p className="p__opensans">Sat - Sun: 02:00 pm - 03:00 pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
