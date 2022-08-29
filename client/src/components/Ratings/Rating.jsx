import React from "react";
import images from "../../constants/images";

function Rating(props) {
  const { rating } = props;
  return (
    <div className="rating">
      <span>
        <img 
          src={
            rating >= 1
              ? images.fillstar
              : rating >= 0.5
              ? images.halffillstar
              : images.nofillstar
          }
          className="star" alt="star rating"
        />
      </span>
      <span>
        <img
          src={
            rating >= 2
              ? images.fillstar
              : rating >= 1.5
              ? images.halffillstar
              : images.nofillstar
          }
          className="star" alt="star rating"
        />
      </span>
      <span>
        <img
          src={
            rating >= 3
              ? images.fillstar
              : rating >= 2.5
              ? images.halffillstar
              : images.nofillstar
          }
          className="star" alt="star rating"
        />
      </span>
      <span>
        <img
          src={
            rating >= 4
              ? images.fillstar
              : rating >= 3.5
              ? images.halffillstar
              : images.nofillstar
          }
          className="star" alt="star rating"
        />
      </span>
      <span>
        <img
          src={
            rating >= 5
              ? images.fillstar
              : rating >= 4.5
              ? images.halffillstar
              : images.nofillstar
          }
          className="star" alt="star rating"
        />
      </span>
    </div>
  );
}
export default Rating;
