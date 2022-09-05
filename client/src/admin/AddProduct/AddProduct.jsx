import React, { useState } from "react";
import "./AddProduct.css";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";
import { addProduct, postProduct } from "../../methods/postData";

function AddProduct() {
  const history = useNavigate();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState();
  const [data, setData] = useState(undefined);
  const handleChange = (e) => {
    if (e.target.id !== "image")
      setData({ ...data, [e.target.id]: e.target.value });
    else setData({ ...data, [e.target.id]: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      data &&
      data.name &&
      data.image &&
      data.description &&
      data.price &&
      data.category &&
      data.countInStock
    ) {
      const post = async () => {
        const res = await postProduct(data);
        console.log(res);
      };
      post();
    } else {
    }
  };
  return (
    <>
      <div className="add-p-container">
        <h1 className="section-title " style={{ "margin-left": "0" }}>
          Add Product Info
        </h1>
        <div className="add-p-wrapper" onChange={(e) => handleChange(e)}>
          <form>
            <input
              id="name"
              type="text"
              name="product_name"
              className="product"
              placeholder="Product Name"
            />
            <input
              id="category"
              type="text"
              name="product_category"
              className="product"
              placeholder="Product Category"
            />
            <input
              id="price"
              type="text"
              name="product_price"
              className="product"
              placeholder="Product Price"
            />
            <input
              type="text"
              id="countInStock"
              name="product_number"
              className="product"
              placeholder="Product Number"
            />
            <textarea
              id="description"
              name="product_description"
              className="product"
              placeholder="Description"
            />
            <div className="form-group">
              <div>
                <figure className="avatar">
                  <img
                    src={image}
                    className="rounded-pill"
                    alt="Avatar Preview"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  name="avatar"
                  className="custom-file-input"
                  id="image"
                  style={{
                    width: "19rem",
                    border: "1px solid var(--color-golden2)",
                  }}
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose Avatar
                </label>
              </div>
            </div>

            <input
              type="submit"
              value="Send"
              className="Sproduct-btn"
              onClick={(e) => handleSubmit(e)}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
