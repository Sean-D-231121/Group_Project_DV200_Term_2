import { useState } from "react";
import "../pages/Splash.css";
import axios from "axios";

const AddProduct = ({setAddProduct}) => {
  const [message, setMessage] = useState("");
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!id || !name || !description || !image || !price || !rating) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);
      formData.append("rating", rating);

      const response = await axios.post(
        "http://localhost:5000/api/products/registerProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setMessage("Product created successfully");
        setAddProduct(false)
      } else {
        setMessage("Error creating product");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Error creating product";
      setMessage(errorMsg);
    }
  };

  return (
    <div className="container ">
      <form onSubmit={handleSubmit}>
        <div className="card w-100 h-100 px-5 pt-2 mx-auto">
          <h1 className="signh1">Add product</h1>
          <div className="signupdiv1">
            <p className="signuptext">Enter ID</p>
            <input
              className="signupinput"
              type="text"
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
          </div>
          <div className="signupdiv1">
            <p className="signuptext">Choose an image</p>
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
          <div className="row mx-auto gap-5 pb-5">
            <div className="col-3">
              <button type="submit" className="signupbutton">
                Add
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="signupbutton"
                onClick={() => setAddProduct(false)}
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

export default AddProduct;


