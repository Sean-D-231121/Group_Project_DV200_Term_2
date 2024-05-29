import "./productpage.css";
import "./Global.css";
import MySideNav from "../Components/NavBar";
import { Rating } from "react-simple-star-rating";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProduct from "../Components/AddProduct";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [role, setRole] = useState("admin"); // State to check if the user is an admin
  const [addProduct, setAddProduct] = useState(false)
  useEffect(() => {
    // Fetch user info to check if admin
    
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);


  const addCartButtonClick = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, carted: !product.carted }
          : product
      )
    );
  };

  

  return (
    <>
      <MySideNav />
      <div className="webpage-frame">
        <div className="container-fluid ml-5">
          <div className="col-12">
            <h3>Store </h3>
            {(role === "admin" || role === "Admin") && addProduct === true ? (
              <>
                <AddProduct />
              </>
            ) : (
              <>
                <div className="row mt-3  ">
                  <div className="col-6 ">
                    <button className="CustomerButton">My Cart</button>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-2 ">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Filter
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Text"
                        />
                      </div>
                      <div className="col-2 gap-2">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Search
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Search"
                        />
                      </div>
                      <div className="col-2">
                        {role === "admin" || role === "Admin" ? (
                          <button
                            className="btn CustomerButton"
                            onClick={() => {
                              setAddProduct(true);
                            }}
                          >
                            Add Product
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-5 mt-5 ml-5">
                  {role === "admin" || role === "Admin"
                    ? products.map((product) => (
                        <div
                          className="card ms-3 mt-5"
                          style={{ width: "18rem", height: "30rem" }}
                          key={product.id}
                        >
                          <img
                            className="images-circular card-img-top"
                            src={`http://localhost:5000/Images/${product.image}`}
                            alt={`${product.name}`}
                          />
                          <div className="card-body ml-5">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <Rating initialValue={product.rating} readonly />
                            <p>R{product.price}.00</p>
                            <button
                              onClick={() => addCartButtonClick(product.id)}
                              className="btn CustomerButton mt-auto"
                            >
                              {product.carted ? "Added to cart" : "Add to cart"}
                            </button>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
