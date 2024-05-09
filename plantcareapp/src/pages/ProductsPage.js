import "./productpage.css";
const ProductsPage = () => {
  return (
    <div className="container">
      <div className="col-12"> Store </div>
      <div className="row mt-5 gap-5">
        <div className="col-4">
          <button className="CustomerButton">My Cart</button>
        </div>

        <div className="col-3">
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
            Filter
          </label>
          <input
            type="Text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="row">
        <div class="card" style={{width: "18rem"}} >
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary mt-auto">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;
