const { admin_account } = require("../env/env");
const Card = require("../models/Card");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");

module.exports.addProduct = async (req, res) => {
  try {
    console.log(req.body);
    const prod =await Product.create({
      name: req.body.name,
      image: req.file.originalname,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      countInStock: req.body.countInStock,
      rating: 0,
      numReviews: 0,
    });
    console.log(prod);
    if (prod) {
      res.status(200).json(prod);
    } else {
      res.status(203).json("Hoy nai");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.updateReview = async (req, res) => {
  try {
    const ret = await Product.findById(req.body.id);
    if (ret) {
      ret.reviews.push(req.body.data.review);
      await ret.save();
    }
    Promise.all([ret]).then(() => {
      res.status(200).json("Updated");
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports.showOrderInfo = async (req, res) => {
  try {
    const ret = await Order.find({});
    if (ret.length > 0) {
      res.status(200).json(ret);
    } else {
      res.status(203).json("Nothing ot show");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.updateDelivery = async (req, res) => {
  try {
    const { email, amount } = req.body.data || req.body.email;
    const res1 = await Order.findOne({ email: email });
    const res2 = await User.findOne({ email: email });
    Promise.all([res1, res2]).then(async (res2) => {
      const res3 = await Card.findOne({ ref_id: res2._id });
      res3.balance = parseInt(res3.balance) - parseInt(amount);
      await res3.save();
      Promise.all([res3]).then(async () => {
        const res4 = await Card.findOne({ account_no: admin_account });
        if (res4) {
          res4.balance = parseInt(res4.balance) + parseInt(amount);
          await res4.save();
          Promise.all([res4]).then(async () => {
            res1.isDelivered = true;
            await res1.save();
            Promise.all([res1]).then(() => {
              res.status(200).json("Transaction done");
            });
          });
        }
      });
    });
  } catch (err) {
    res.status(203).json("Transaction Reverted");
    console.log(err);
  }
};
