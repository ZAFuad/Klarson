import React from "react";
import "./AddReview.css";
import images from "../../constants/images";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddReview = () => {
  let ratingStarInput =[...document.querySelectorAll('.rating-star')];
  ratingStarInput.map((star,index)=>{
    star.addEventListener('click',()=>{
      for(let i=0;i<5;i++){
        if(i<=index){
          ratingStarInput[i].src = `{images.fillstar}`
        }
        else{
          ratingStarInput[i].src =`{images.nofillstar}`
        }
      }
    })
  })

  return (
    <>
      <div className="add-review-sec">
        <h1 className="Rtitle">Give a review</h1>
        <div className="Rratings">
          <h2>How much you liked the Product</h2>
          <img src={images.nofillstar} className="rating-star" alt="star-rating" />
          <img src={images.nofillstar} className="rating-star" alt="star-rating" />
          <img src={images.nofillstar} className="rating-star" alt="star-rating" />
          <img src={images.nofillstar} className="rating-star" alt="star-rating" />
          <img src={images.nofillstar} className="rating-star" alt="star-rating" />
        </div>
        <textarea
          type="text"
          className="review-field"
          placeholder="Say something about the product"
        ></textarea>
        <button className="Sproduct-btn">Add Review</button>
      </div>
    </>
  );
};

export default AddReview;
