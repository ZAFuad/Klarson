const {
  RegisterUser,
  LoginUser,
  findMyOrder,
  checkoutCart,
  getAllProducts,
  getProductInfo,
  getOrder,
  // getCategory,
} = require("../controller/AppController");

const router = require("express").Router();

router.get("/findorder/:email", findMyOrder);
router.get("/getproduct", getAllProducts);
router.get(`/product/:id`, getProductInfo);
router.post("/checkout", checkoutCart);
router.post("/login", LoginUser);
// router.get("/getcategory", getCategory);
router.post(`/register`, RegisterUser);
router.get('/previous/:id', getOrder)
module.exports = router;
