const Card = require("../models/Card");
const Transaction = require("../models/transactionModel");
const User = require("../models/userModel");
module.exports.getCardInfo = async (req, res) => {
  try {
    const { account_no, secret } = req.body.data;
    const res = await Card.findOne({ account_no: account_no });
    if (res.secret === secret) {
      res.status(200).json(res);
    } else {
      res.status(203).json("Secret key is invalid!!!");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.createCard = async (req, res) => {
  try {
    console.log(req.body);
    const ret = await Card.create({
      ...req.body.data,
      balance: "100000",
    });
    if (res) {
      res.status(200).json(ret);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.postTransactions = async (req, res) => {
  try {
    let { data } = req.body;
    const card = await Transaction.create(data);
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      const temp = data[i];
      const ret1 = await Card.findOne({ account_no: "12345" }); //User
      ret1.balance = parseInt(
        parseInt(ret1.balance) -
        parseInt(data[i].prod_price * data[i].prod_quantity)
      );
      ret1.save();
      const ret2 = await Card.findOne({ account_no: "67890" });
      ret2.balance = parseInt(
        parseInt(ret2.balance) +
        0.9 * parseInt(data[i].prod_price * data[i].prod_quantity)
      ); //Supplier
      ret2.save();
      const ret3 = await Card.findOne({ account_no: "112220" });
      console.log(ret3);
      ret3.balance = parseInt(
        parseInt(ret3.balance) +
        0.1 * parseInt(data[i].prod_price * data[i].prod_quantity)
      ); //Admin
      ret3.save();
      console.log(ret3);
    }
    // Promise.all([ret3]).then(()=>{
    //   console.log(ret3)
    res.status(200).json("hoise");
    // })
  } catch (err) {
    console.log(err);
  }
};

module.exports.showTransactions = async (req, res) => {
  try {
    const data = await Transaction.find({});
    if (data.length) {
      res.status(200).json(data);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.getProfile = async (req, res) => {
  try {
    console.log(req.params.id)
    const ret = await Card.findOne({ account_name: req.params.id });
    if (ret) {
      res.status(200).json(ret);
    }
    else {
      res.status(203).json("Card nai")
    }

  }
  catch (err) {
    console.log(err)
  }
}