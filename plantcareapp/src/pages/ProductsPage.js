
const ProductsPage = () => {

    return (
      <div className="container">
        <div className="col-12"> Store </div>
        <div className="row mt-3">
          <div className="col-4">
            <button>My Cart</button>
          </div>
          <div className="d-flex ">
            <div className="row">
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
          </div>
        </div>
      </div>
    );
}
export default ProductsPage