import MySideNav from "../Components/NavBar";
import React, { useState } from "react";
import "./Cart.css";
import minusCircle from "../Images/minus-circle.png";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Colour Booster",
      description: "Plant food formulated for macro and micro nutrients",
      image: require("../Images/Product-3.png"),
      rating: 3,
      price: "R70, 00",
      carted: true,
    },
    {
      id: 2,
      name: "Multi-booster",
      description: "Boost your plants vitality by leaps and bounds",
      image: require("../Images/Product-2.png"),
      rating: 5,
      price: "R100, 00",
      carted: true,
    },
  ]);

  const handleRemoveAll = () => {
    setCart([]);
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <MySideNav />
      <div className="container-fluid ms-5" >
        <div className="col-12">
          <h2>My Cart</h2>
          <div className="d-flex justify-content-center">
            <div className="col-3">
              <button className="btn CustomerButton">Add to Cart</button>
            </div>
            <div className="col-3">
              <button className="btn CustomerButton" onClick={handleRemoveAll}>
                Remove all
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-start gap-5 mt-5 ms-5">
            <div className="row ms-5 g-2">
              {cart.map((cartItem) => (
                <div
                  className="card mb-3 position-relative ms-5"
                  style={{ maxWidth: "600px" }}
                  key={cartItem.id}
                >
                  <div className="row g-0">
                    <div className="col-md-1 ms-2 mt-3">
                      <img
                        src={cartItem.image}
                        className="img-fluid rounded-start"
                        alt={"Product-" + cartItem.id}
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <div className="col-6">
                          <h5 className="card-title">{cartItem.name}</h5>
                          <p className="card-text">{cartItem.price}</p>
                        </div>
                        <img
                          src={minusCircle}
                          alt="minus-circle"
                          className="position-absolute top-0 end-0 mt-2 me-2"
                          style={{
                            width: "35px",
                            height: "35px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleRemoveItem(cartItem.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
