const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); dotenv.config();
const app = express();

const ShippingLabel = require('./model/Shipping_Label');

app.use(express.json());

mongoose.connect
    (`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.gnws6.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
    }
    );

app.post('/shipping/entry/', async (req, res) => {
    const slabel = new ShippingLabel({
        name: "Muhammad Shefat Zeon",
        phone: "01918468932",
        address: "1960,Bhuapur, Tangail, Dhaka, Bangladesh",
        product_details: "nothing",
        product_price: 2000,
        total_cost: 2100,
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