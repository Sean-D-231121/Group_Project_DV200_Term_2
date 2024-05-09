import './productspage.css'
const ProductsPage = () => {

    return (
      <div className="container">
        <div className="col-12"> Store </div>
        <div className="row mt-3">
          <div className="col-4">
            <button>My Cart</button>
          </div>
          
            <div className="col-3 gap-2">
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
      </div>
    );
}
export default ProductsPage