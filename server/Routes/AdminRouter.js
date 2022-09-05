const router = require("express").Router();
const multer = require("multer");
const { addProduct } = require("../controller/AdminController");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    cb(null, "../client/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post("/addproduct", upload.single("image"), addProduct);
router.get('/getaddadmin', async (req, res) => {
  const users = await User.estimatedDocumentCount();
  const suppliers = 1;
  const products = await Product.estimatedDocumentCount();
  let data = {
    users, suppliers, products
  }
  res.status(200).json(data)
})
module.exports = router;
