import MySideNav from "../Components/NavBar";
import React, {useState} from "react";
import "./Cart.css"
const Cart = () => {
    const [cart, setCart] = useState([
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
  return (
    <>
      <MySideNav />
      <div className="container-fluid ms-5" style = {{backgroundColor: "#fff"}}>
        <div className="col-12" >
          <h2>My Cart</h2>
          <div className="d-flex justify-content-center ">
            <div className="col-3">
              <a className="btn CustomerButton">Add to Cart</a>
            </div>
            <div className="col-3">
              <a className="btn CustomerButton">Remove all</a>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-5 mt-5 ms-5">
            <div className="row ms-5 g-2">
              {cart.map((cartItem) => (
                <div
                  className="card mb-3"
                  style={{ maxWidth: "600px" }}
                  key={cartItem.id}
                >
                  <div className="row g-0">
                    <div className="col-md-1 ms-2 mt-3 ">
                      <img
                        src={cartItem.image}
                        className="img-fluid rounded-start"
                        
                        alt={"Product-" + cartItem.id}
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <div className="col-6">
                          <h5 className="card-title">{cartItem.name}</h5>
                          <p className="card-text">{cartItem.price}</p>
                        </div>
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
