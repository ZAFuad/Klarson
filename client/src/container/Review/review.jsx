import React from "react";
import "./review.css";
import "../../constants/images";
import images from "../../constants/images";
import data from "../../constants/data";
import "../../App.css";

const review = () => {
  return (
    <div className="review-section">
      <h1 className="review-title">
        What our <span>Customers</span> says about us
      </h1>
      <div className="review-container">
        {data.reviews.map((review) => (
          <div key={review.slug} className="review-card">
            <img className="user-dp" src={review.dp} alt="" />
            <div className="review-body">
              <h2 className="user-name">{review.name}</h2>
              <div className="user-review">
                <img
                  src={images.fillstar}
                  className="review-star"
                  alt="star rating"
                />
                <span className="review-rating-count">{review.rating}</span>
              </div>
              <p className="p__opensans-black">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default review;
