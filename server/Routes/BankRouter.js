const router = require("express").Router();

const {
  createCard,
  getCardInfo,
  postTransactions,
  showTransactions,
  getProfile
} = require("../controller/BankController");


router.post(`/createcard`, createCard);
router.get("/getcardinfo", getCardInfo)
router.post('/posttransaction', postTransactions)
router.get('/gettransaction', showTransactions);
router.get('/getprofiledata/:id', getProfile);
module.exports = router;
