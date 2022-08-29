const {
  RegisterUser,
  LoginUser,
  findMyOrder,
  checkoutCart,
  getAllProducts,
  getProductInfo,
} = require("../controller/AppController");

const router = require("express").Router();

router.get("/findorder/:email", findMyOrder);
router.get("/getproduct", getAllProducts);
router.get(`/product/:id`, getProductInfo);
router.post("/checkout", checkoutCart);
router.post("/login", LoginUser);
router.post(`/register`, RegisterUser);
module.exports = router;
