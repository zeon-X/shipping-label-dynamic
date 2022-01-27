const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); dotenv.config();
const app = express();

const ShippingLabel = require('./model/Shipping_Label');

app.use(express.json());
app.use(cors());

mongoose.connect
    (`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.gnws6.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
    }
    );

app.get("/label/display", async (req, res) => {
    ShippingLabel.find({ state: 'active' },

        (err, result) => {
            if (err) {
                res.send(err);

                console.log(err);
            }
            res.send(result);
        }
    );

});

app.post("/label/entry", async (req, res) => {

    const XorderId = req.body.OI;
    const Xname = req.body.N;
    const Xphone = req.body.P;
    const Xaddress = req.body.A;
    const XproductDetails = req.body.PD;

    const XproductPrice = req.body.PP;
    const XdeliveryCharge = req.body.DC;
    const XtotalCost = req.body.TC;

    const slabel = new ShippingLabel({
        orderId: XorderId,
        name: Xname,
        phone: Xphone,
        address: Xaddress,
        product_details: XproductDetails,
        price: XproductPrice,
        delivery_cost: XdeliveryCharge,
        total_cost: XtotalCost,
    });

    try {
        await slabel.save();

    } catch (error) {
        console.log(error);
    }
});



app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});