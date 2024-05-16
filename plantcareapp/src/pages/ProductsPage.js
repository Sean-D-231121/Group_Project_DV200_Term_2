import "./productpage.css";
import MySideNav from "../Components/NavBar";
import { Rating } from "react-simple-star-rating";
import React, { useState } from "react";
const ProductsPage = () => {
    const [products, setProducts] = useState([
      {
        id: 1,
        name: "Organic fertiliser",
        description: "High quality fertiliser, perfect for many plants",
        image: require("../Images/Product-1.png"),
        rating: 3,
        price: "R70, 00",
        carted: false,
      },
      {
        id: 2,
        name: "Multi-booster",
        description: "Boost your plants vitality by leaps and bounds",
        image: require("../Images/Product-2.png"),
        rating: 5,
        price: "R100, 00",
        carted: false,
      },
    ]);
     const addCartButtonClick =(productId) => {
      setProducts((prevProducts) => prevProducts.map((product) =>
        product.id === productId ? {...product, carted: !product.carted} : product
      ))
     }
     
  return (
    <>
      <MySideNav />
      <div className="container-fluid ml-5">
        <div className="col-12">
          <h3>Store </h3>
          <div className="row mt-3  ">
            <div className="col-6 mr-5">
              <button className="CustomerButton">My Cart</button>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3 ml-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Filter
                  </label>
                  <input
                    type="Text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Text"
                  />
                </div>
                <div className="col-3 gap-2">
                  <label for="exampleFormControlInput1" class="form-label">
                    Search
                  </label>
                  <input
                    type="Text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-5 mt-5 ml-5">
             {products.map((product) => (
              <div className="card ml-3" style={{ width: "18rem" }} key={product.id}>
                <img
                  className="images-circular card-img-top"
                  src={product.image}
                  alt="..."
                />
                <div className="card-body ml-5">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <Rating initialValue={product.rating} readonly />
                  <p>{product.price}</p>
                  <button onClick={() => addCartButtonClick(product.id)} className="btn CustomerButton mt-auto">
                    {product.carted ? "Added to cart" : "Add to cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
