const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    quantity: { type: Number, required: true },
    productId: { type: String, required: true },
    email: { type: String, required: true },
    shippingName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    isDelivered: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
