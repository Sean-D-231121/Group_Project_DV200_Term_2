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
  const [addProduct, setAddProduct] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
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

    // Find the clicked product
    const clickedProduct = products.find((product) => product.id === productId);

    if (clickedProduct) {
      // Get the current cart from session storage
      const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

      // Check if the product is already in the cart
      const productInCart = cart.find((product) => product.id === productId);

      if (productInCart) {
        // Remove the product from the cart if it was already added
        const updatedCart = cart.filter((product) => product.id !== productId);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        // Add the product to the cart if it was not added
        cart.push(clickedProduct);
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  };

  const handleFilterChange = (filterType) => {
    let sortedProducts = [...products];
    switch (filterType) {
      case "alphabetical-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alphabetical-desc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating-asc":
        sortedProducts.sort((a, b) => a.rating - b.rating);
        break;
      case "rating-desc":
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.post("http://localhost:5000/api/products/deleteProduct", {
        id: productId,
      });
      setProducts(products.filter((product) => product.id !== productId));
      setFilteredProducts(
        filteredProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("There was an error deleting the product!", error);
    }
  };

  return (
    <>
      <MySideNav />
      <div className="webpage-frame">
        <div className="container-fluid ml-5">
          <div className="col-12">
            <h3>Store</h3>
            {(role === "admin" || role === "Admin") && addProduct === true ? (
              <>
                <AddProduct setAddProduct={setAddProduct} />
              </>
            ) : (
              <>
                <div className="row mt-3 mr-5">
                  <div className="col-3">
                    <button className="CustomerButton">My Cart</button>
                  </div>
                  <div className="col-9">
                    <div className="row gap-2">
                      <div className="col-2">
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle mt-4 mr-5"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Filter
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() =>
                                  handleFilterChange("alphabetical-asc")
                                }
                              >
                                Alphabetical Ascending
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() =>
                                  handleFilterChange("alphabetical-desc")
                                }
                              >
                                Alphabetical Descending
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange("price-asc")}
                              >
                                Price Ascending
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange("price-desc")}
                              >
                                Price Descending
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange("rating-asc")}
                              >
                                Rating Ascending
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() =>
                                  handleFilterChange("rating-desc")
                                }
                              >
                                Rating Descending
                              </button>
                            </li>
                          </ul>
                        </div>
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
                    ? filteredProducts.map((product) => (
                        <div
                          className="card ms-3 mt-5"
                          style={{ width: "18rem", height: "32rem" }}
                          key={product.id}
                        >
                          <img
                            className="images-circular card-img-top mt-2"
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
                            {role === "admin" || role === "Admin" ? (
                              <button
                                onClick={() => deleteProduct(product.id)}
                                className="btn btn-warning mt-3"
                              >
                                Delete
                              </button>
                            ) : null}
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
