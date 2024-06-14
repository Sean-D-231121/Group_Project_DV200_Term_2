import "./productpage.css";
import "./Global.css";
import MySideNav from "../Components/NavBar";
import { Rating } from "react-simple-star-rating";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProduct from "../Components/AddProduct";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [addProduct, setAddProduct] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [user, setUser] = useState([]);
  const [role, setRole] = useState("admin");
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state

  useEffect(() => {
    const fetchProductsAndCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        const productsWithCarted = response.data.map((product) => ({
          ...product,
          carted: cart.some((cartItem) => cartItem.id === product.id),
        }));

        setProducts(productsWithCarted);
        setFilteredProducts(productsWithCarted);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }

      const storedUser = sessionStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setRole(parsedUser.usertype); // Set role from sessionStorage
      }
    };

    fetchProductsAndCart();
  }, []);

  useEffect(() => {
    // Filter products based on search query
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const addCartButtonClick = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, carted: !product.carted } // Toggle carted state
          : product
      )
    );

    const clickedProduct = products.find((product) => product.id === productId);
    if (clickedProduct) {
      const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      const productInCart = cart.find((product) => product.id === productId);

      let updatedCart;
      if (productInCart) {
        updatedCart = cart.filter((product) => product.id !== productId);
      } else {
        updatedCart = [...cart, clickedProduct];
      }
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));

      const updatedFilteredProducts = filteredProducts.map((product) =>
        product.id === productId
          ? { ...product, carted: !product.carted } // Toggle carted state
          : product
      );
      setFilteredProducts(updatedFilteredProducts);
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
        <div className="container ml-5">
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
                    <Link to="/Cart">
                      <button className=" btn btn-primary px-5 pt-3 pb-3">
                        My Cart
                      </button>
                    </Link>
                  </div>
                  <div className="col-9">
                    <div className="row gap-2">
                      <div className="col-2">
                        <div className="dropdown">
                          <button
                            className="btn btn-primary dropdown-toggle mt-4 mr-5"
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
                      <div className="col-4 gap-2">
                        <label htmlFor="searchInput" className="form-label">
                          Search
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="searchInput"
                          placeholder="Search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)} // Handle search input change
                        />
                      </div>
                      <div className="col-2">
                        {role === "admin" || role === "Admin" ? (
                          <button
                            className="btn btn-primary px-5 pt-3 pb-3"
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
                  {filteredProducts.map((product) => (
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
                        <div className="row">
                          <div className="col-6">
                            <button
                              onClick={() => addCartButtonClick(product.id)}
                              className="btn btn-primary mx-auto"
                            >
                              {product.carted ? "Added to cart" : "Add to cart"}
                            </button>
                          </div>
                          <div className="col-6">
                            <Link
                              to={`/product/${product.id}`}
                              className="btn btn-primary"
                            >
                              View Product
                            </Link>
                          </div>
                          <div className="col-6 mx-auto">
                            {role === "admin" || role === "Admin" ? (
                              <button
                                onClick={() => deleteProduct(product.id)}
                                className="btn btn-secondary mt-3 mx-auto"
                              >
                                Delete
                              </button>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
