import Axios from 'axios';
import React, { useEffect } from 'react';

export default function labelDisplay() {


    

    return (
        <div style={{ display: "flex", flexWrap: " wrap", }}>
            <div style={{ margin: " 10px", backgroundColor: " white", border: " solid 3px black", width: " 280px", display: " flex", flexDirection: " column", justifyContent: " center", alignItems: "center", }}>

                <img src="img/Picture8.png" style={{ backgroundColor: " black", width: " 280px", }} />
                <div style={{ display: "flex", width: " 90%", }}>
                    <p style={{ width: " 60%", }}>
                        <span>Order Id</span>
                        <span>Name</span>
                        <span>Phone</span>
                        <span>Address</span>
                    </p>
                    <p> <span>: 22B10</span>
                        <span>: Shefat Zeon</span>
                        <span><b>: +8801402199906 </b></span>
                        <span>: Lorem ipsum dolor sit amet consectetur adipisicing
                            eli </span>
                    </p>
                </div>

                <div style={{ display: " flex", width: " 90%", }}>
                    <p style={{ width: " 30%", margin: " 0", }}>Product Details </p>
                    <p style={{ margin: " 0", }}> :" coffee cup</p>
                </div>

                <div style={{ width: " 90%", }}>
                    <h3 style={{ marginBottom: " 0", }}>Payment Details</h3>
                    <hr />
                </div>

                <div style={{ display: " flex", width: " 90%", }}>
                    <p style={{ width: " 50%", }}>
                        <span>Product Price</span>
                        <span>Delivery Charge</span>
                        <span><b>Total to Pay</b></span>
                    </p>

                    <p> <span>: BDT 1000</span>
                        <span>: BDT 100</span>
                        <span>: <b>BDT1100</b></span>
                    </p>
                </div>

                <div style={{ display: " flex", width: " 90%", }}>
                    <img src="./img/barcode.png.gif" style={{ padding: " 5px", }} />
                    <img src="./img/qr.png" style={{ width: " 60px", height: " 60px", marginLeft: " 30px", }} />
                </div>

                <div style={{ width: " 90%", display: " flex", justifyContent: " center", }}>
                    <p style={{ fontSize: " 10px", paddingTop: " 10px", }}>Thanks for shopping with HomeDecorbd</p>
                </div>


            </div>
        </div>






    )
}