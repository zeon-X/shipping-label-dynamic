import Axios from 'axios';
import React, { useEffect, useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
export const LabelDisplay = () => {


    const [shippingLabel, setShippingLabel] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/label/display').then((response) => {
            setShippingLabel(response.data);
            console.log(response.data);
        });
    }, []);


    return (
        <div style={{ display: "flex", flexWrap: "wrap", }}>
            {shippingLabel.map((value, key) => {
                return (

                    <div style={{ display: "flex", flexWrap: " wrap", }}>
                        <div style={{ margin: "10px", backgroundColor: " white", border: " solid 3px black", width: " 310px", display: " flex", flexDirection: " column", justifyContent: " center", alignItems: "center", }}>

                            <img src={require('./img/Picture8.png')} style={{ backgroundColor: " black", width: " 310px", }} alt={{}} />
                            <div style={{ display: "flex", width: " 90%", marginTop: "10px" }}>
                                <p style={{ width: " 40%" }}>
                                    Order Id<br />
                                    Name<br />
                                    Phone<br />
                                    Address<br />
                                </p>
                                <p> : {value.orderId}<br />
                                    : {value.name}<br />
                                    <b>: {value.phone} </b><br />
                                    : {value.address}<br />
                                </p>
                            </div>

                            <div style={{ display: " flex", width: " 90%", }}>
                                <p style={{ width: " 40%", margin: " 0", }}>Product Details </p>
                                <p style={{ margin: " 0", }}> : {value.product_details}</p>
                            </div>

                            <div style={{ width: " 90%", }}>
                                <h3 style={{ marginBottom: " 0", marginTop:"10px" }}>Payment Details</h3>
                                <hr />
                            </div>

                            <div style={{ display: " flex", width: " 90%", }}>
                                <p style={{ width: " 50%", }}>
                                    <span>Product Price</span><br />
                                    <span>Delivery Charge</span><br />
                                    <span><b>Total Cost</b></span><br />
                                </p>

                                <p> <span>: BDT {value.price}</span><br />
                                    <span>: BDT {value.delivery_cost}</span><br />
                                    <span>: <b>BDT {value.total_cost}</b></span><br />
                                </p>
                            </div>

                            <div style={{ display: " flex", width: " 90%", }}>
                                <img src={require('./img/barcode.png.gif')} style={{ padding: " 5px", }} alt={{}} />
                                <img src={require('./img/qr.png')} style={{ width: " 60px", height: " 60px", marginLeft: " 30px", }} alt={{}} />
                            </div>

                            <div style={{ width: " 90%", display: " flex", justifyContent: " center", }}>
                                <p style={{ fontSize: " 10px", paddingTop: " 10px", }}>Thanks for shopping with HomeDecorbd</p>
                            </div>


                        </div>
                    </div>
                );

            })}
        </div>






    )
}