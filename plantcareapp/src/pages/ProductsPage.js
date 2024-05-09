import "./productpage.css";
import prodOne from "../Images/product-1.png"
const ProductsPage = () => {
  return (
    <div className="container ml-5">
      <div className="col-8">
        <h3>Store </h3>
        <div className="row mt-3 ">
          <div className="col-4 mr-5">
            <button className="CustomerButton">My Cart</button>
          </div>
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
        <div className="row ">
          <div className="card ml-3" style={{ width: "18rem" }}>
            <img
              className="images-circular"
              src={prodOne}
              class="card-img-top"
              alt="..."
            />
            <div className="card-body ml-5">
              <h5 className="card-title">Organic fertilise</h5>
              <p className="card-text">
                High quality fertiliser, perfect for many plants
              </p>
              <p> R70, 00</p>
              <a href="#" class="btn CustomerButton mt-auto">
                Add to cart
              </a>
            </div>
          </div>
          <div className="card ml-3 gap-3" style={{ width: "18rem" }}>
            <img
              className="images-circular"
              src={prodOne}
              class="card-img-top"
              alt="..."
            />
            <div className="card-body ml-5">
              <h5 className="card-title">Organic fertilise</h5>
              <p className="card-text">
                High quality fertiliser, perfect for many plants
              </p>
              <p> R70, 00</p>
              <a href="#" class="btn CustomerButton mt-auto">
                Add to cart
              </a>
            </div>
          </div>
          <div className="card ml-3" style={{ width: "18rem" }}>
            <img
              className="images-circular"
              src={prodOne}
              class="card-img-top"
              alt="..."
            />
            <div className="card-body ml-5">
              <h5 className="card-title">Organic fertilise</h5>
              <p className="card-text">
                High quality fertiliser, perfect for many plants
              </p>
              <p> R70, 00</p>
              <a href="#" class="btn CustomerButton mt-auto">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;
