import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./singleproductpage.css";
import MySideNav from "../Components/NavBar";
import { Rating } from "react-simple-star-rating";
import EditProduct from "../Components/EditProduct";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [role, setRole] = useState(""); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/product/${id}`
        );
        setProduct(response.data);

        // Check if the product is already in the cart
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const productInCart = cart.some((item) => item.id === response.data.id);
        setIsInCart(productInCart);
      } catch (error) {
        console.error("There was an error fetching the product!", error);
      }
    };
    fetchProduct();

    
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setRole(parsedUser.usertype); 
    }
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      // Remove the product from the cart
      const updatedCart = cart.filter((item) => item.id !== product.id);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      setIsInCart(false);
    } else {
      // Add the product to the cart
      cart.push(product);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      setIsInCart(true);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="webpage-frame">
      <MySideNav />
      <div className="container mt-5 d-flex justify-content-center align-items-center ">
        {(role === "admin" || "Admin") && !editMode ? (
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img
                src={`http://localhost:5000/Images/${product.image}`}
                className="img-fluid"
                alt={product.name}
              />
            </div>
            <div className="col-md-6">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Rating: {<Rating initialValue={product.rating} readonly />}</p>
              <p>Price: R{product.price}.00</p>
              <div className="row">
                <button onClick={handleAddToCart} className="btn btn-primary">
                  {isInCart ? "Remove from Cart" : "Add to Cart"}
                </button>
                {role && (role === "admin" || role ==="Admin")  ? (
                  <button
                    onClick={() => setEditMode(true)}
                    className="btn btn-secondary ml-2"
                  >
                    Edit
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <EditProduct
            product={product}
            setEditMode={setEditMode}
            setProduct={setProduct}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPage;

