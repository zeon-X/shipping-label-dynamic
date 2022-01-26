import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="App">

      <div className="w-100 d-flex flex-column align-items-center ">
        <section className=" container d-flex flex-column align-items-center justify-content-center" id="contact-us">
          <p className="pt-5 pb-3 text-center fs-4 fw-bold">Shipping Label Form</p>

          <form className="w-75 d-flex justify-content-center align-items-center shadow mb-5">
            <div className="w-75 ">

            <p className="py-4">Customer Information</p>

              <div className="form-floating ">
                <input type="text" className="form-control rounded-0 border-0  border-bottom border-2 "
                  placeholder="" />
                <label for="floatingInput">Order Id</label>
              </div>

              <div className="form-floating ">
                <input type="text" className="form-control rounded-0 border-0  border-bottom border-2 "
                  placeholder="" />
                <label for="floatingInput">Name</label>
              </div>

              <div className="form-floating ">
                <input type="text" className="form-control rounded-0 border-0  border-bottom border-2 "
                  placeholder="" />
                <label for="floatingInput">Phone</label>
              </div>

              <div className="form-floating ">
                <input type="text" className="form-control rounded-0 border-0  border-bottom border-2 "
                  placeholder="" />
                <label for="floatingInput">Address</label>
              </div>

              <div className="form-floating ">
                <input type="text" className="form-control rounded-0 border-0  border-bottom border-2 "
                  placeholder="" />
                <label for="floatingInput">Product Details</label>
              </div>

              <p className="py-4">Payment Information</p>

              <div className="form-floating ">
                <input type="number" className="form-control rounded-0 border-0  border-bottom border-2 "
                  placeholder="" />
                <label for="floatingInput">Product Price</label>
              </div>
              <div className="form-floating ">
                <input type="number" className="form-control rounded-0 border-0  border-bottom border-2 "
                  placeholder="" />
                <label for="floatingInput">Delivery Charge</label>
              </div>
              <div className="form-floating ">
                <input type="number" className="form-control rounded-0 border-0  border-bottom border-2 "
                  placeholder="" />
                <label for="floatingInput">Total Cost</label>
              </div>



              <button type="button" className="btn btn-dark rounded-0 text-white px-5 my-4">Send</button>

            </div>

          </form>


        </section>
      </div>
    </div>
  );
}

export default App;
