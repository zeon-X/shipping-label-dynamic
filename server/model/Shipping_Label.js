const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipping_label = new Schema({
    date: {
        type: Date, default: Date.now,
    },
    state: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    orderId: {
        type: String,
        default: "1112A10",
    },
    name: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    product_details: {
        type: String,
    },
    price: {
        type: Number,
    },
    delivery_cost: {
        type: Number,
        default: 100,
    },
    total_cost: {
        type: Number,
    },
});



const Shipping_Label = mongoose.model(`${process.env.MONGO_DB_DATABASE_COLLECTION}`, shipping_label);
module.exports = Shipping_Label;