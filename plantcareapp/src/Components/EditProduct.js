import React, { useState } from "react";
import axios from "axios";
import "../pages/Splash.css";

const EditProduct = ({ product, setEditMode, setProduct }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(product.price);
  const [rating, setRating] = useState(product.rating);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !description || !price || !rating) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("id", product.id);
      formData.append("name", name);
      formData.append("description", description);
      if (image) {
        formData.append("image", image);
      }
      formData.append("price", price);
      formData.append("rating", rating);

      const response = await axios.put(
        `http://localhost:5000/api/products/updateProduct/${product.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setMessage("Product updated successfully");
        setProduct(response.data);
        setEditMode(false);
      } else {
        setMessage("Error updating product");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Error updating product";
      setMessage(errorMsg);
    }
  };

  return (
    <div className="container ">
      <form onSubmit={handleSubmit}>
        <div className="card w-100 h-100 px-5 pt-2 mx-auto">
          <h1 className="signh1">Edit Product</h1>
          <div className="signupdiv1">
            <p className="signuptext">Choose an image </p>
            <input
              className="signupinput"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="signupdiv1">
            <p className="signuptext">Product name</p>
            <input
              className="signupinput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="signupdiv1">
            <p className="signuptext">Description</p>
            <textarea
              className="textArea"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="signupdiv1">
            <p className="signuptext">Rating</p>
            <input
              className="signupinput"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="signupdiv1">
            <p className="signuptext">Price</p>
            <input
              className="signupinput"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="row mx-auto gap-5">
            <div className="col-3">
              <button type="submit" className="btn btn-primary mb-5">
                Update
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-primary mb-5"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          </div>

          {message && <p className="message">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
