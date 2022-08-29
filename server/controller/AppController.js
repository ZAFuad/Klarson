const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const CryptoJS = require("crypto-js");
module.exports.LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body.data;
    console.log({ email, password });
    const ret = await User.findOne({
      email: email,
    });
    console.log(ret);
    if (ret.password === password) {
      res.status(200).json(ret);
    } else {
      res.status(203).json("Wrong password");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.RegisterUser = async (req, res) => {
  try {
    console.log(req.body.data);
    const ret = await User.create({ ...req.body.data });
    console.log(ret);
    if (ret) {
      res.status(200).json(ret);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.checkoutCart = async (req, res) => {
  try {
    const ret = await Order.create({ ...req.body.data });
    if (ret) {
      res.status(200).json(ret);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.findMyOrder = async (req, res) => {
  try {
    const { email } = req.params.email;
    const ret = await Order.find({ email: email });
    if (ret.length > 0) {
      res.status(200).json(ret);
    } else {
      res.status(203).json("Nothing to show");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.getAllProducts = async (req, res) => {
  try {
    const ret = await Product.find({});
    if (ret.length > 0) {
      res.status(200).json(ret);
    } else {
      res.status(203).json("Nothing to show");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.getProductInfo = async (req, res) => {
  try {
    const ret = await Product.findById(req.params.id);
    if (ret) {
      res.status(200).json(ret);
    } else {
      res.status(203).json("Nothing to show");
    }
  } catch (err) {
    console.log(err);
  }
};
