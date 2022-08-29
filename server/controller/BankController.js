const Card = require("../models/Card");

module.exports.getCardInfo = async (req, res) => {
  try {
    const { account_no, secret } = req.body.data;
    const ret = await Card.findOne({ account_no: account_no });
    if (ret.secret === secret) {
      res.status(200).json(ret);
    } else {
      res.status(203).json("umm khub hacker!!!");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.createCard = async (req, res) => {
  try {
    const ret = await Card.create({
      ...req.body.data,
    });
    if (ret) {
      res.status(200).json(ret);
    }
  } catch (err) {
    console.log(err);
  }
};
