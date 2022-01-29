import Axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import React, { useState } from 'react';


export const LabelForm = () => {
    const [orderId, setOrderId] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [productDetails, setProductDetails] = useState("");

    const [productPrice, setProductPrice] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const [totalCost, setTotalCost] = useState(0);


    const entryToDatabase = () => {
        //console.log(name + address);
        Axios.post("http://localhost:5000/label/entry", {
            OI: orderId,
            N: name,
            P: phone,
            A: address,
            PD: productDetails,
            PP: productPrice,
            DC: deliveryCharge,
            TC: totalCost,
        });

        document.getElementById("myForm").reset();
    };

    return (
        <div className="w-100 d-flex flex-column align-items-center ">
            <section className=" container d-flex flex-column align-items-center justify-content-center">
                <p className="pt-5 pb-3 text-center fs-4 fw-bold">Shipping Label Form</p>

                <form id="myForm" className=" w-100 d-flex justify-content-center  shadow mb-5">
                    <div className="w-50 mb-5">

                        <p className="py-4">Customer Information</p>

                        <div class="form-floating mb-3 me-5">
                            <input type="text"
                                onChange={(event) => {
                                    setOrderId(event.target.value);
                                }}
                                class="form-control" id="orderId" placeholder="a" />
                            <label for="orderId">Order Id</label>
                        </div>

                        <div class="form-floating mb-3 me-5">
                            <input type="text"
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                                class="form-control" id="name" placeholder="a" />
                            <label for="name">Name</label>
                        </div>

                        <div class="form-floating mb-3 me-5">
                            <input type="text"
                                onChange={(event) => {
                                    setPhone(event.target.value);
                                }}
                                class="form-control" id="phone" placeholder="a" />
                            <label for="phone">Phone</label>
                        </div>

                        <div class="form-floating mb-3 me-5">
                            <input type="text"
                                onChange={(event) => {
                                    setAddress(event.target.value);
                                }}
                                class="form-control" id="address" placeholder="a" />
                            <label for="address">Address</label>
                        </div>

                        <div class="form-floating mb-3 me-5">
                            <input type="text"
                                onChange={(event) => {
                                    setProductDetails(event.target.value);
                                }}
                                class="form-control" id="product_details" placeholder="a" />
                            <label for="product_details">Product Details</label>
                        </div>

                    </div>


                    <div className="w-25  mb-5">
                        <p className="py-4">Payment Information</p>

                        <div class="form-floating mb-3">
                            <input type="number"
                                onChange={(event) => {
                                    setProductPrice(event.target.value);
                                }}
                                class="form-control" id="price" placeholder="a" />
                            <label for="price">Product Price</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number"
                                onChange={(event) => {
                                    setDeliveryCharge(event.target.value);
                                }}
                                class="form-control" id="delivery_cost" placeholder="a" />
                            <label for="delivery_cost">Delivery Charge</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number"
                                onChange={(event) => {
                                    setTotalCost(event.target.value);
                                }}
                                class="form-control" id="total_cost" placeholder="a" />
                            <label for="total_cost">Total Cost</label>
                        </div>



                        <button onClick={entryToDatabase} type="button" id="entry_btn" className="btn btn-dark text-white px-5 my-4">Entry to Database</button>
                    </div>


                </form>


            </section>
        </div>
    )
}