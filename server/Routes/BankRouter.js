const router = require("express").Router();

const {
    createCard,
    getCardInfo
  } = require("../controller/BankController");


  router.post(`/createcard`, createCard);
  router.get("/getcardinfo", getCardInfo)
module.exports = router;
