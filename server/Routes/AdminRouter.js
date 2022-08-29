const router = require("express").Router();
const multer = require("multer");
const { addProduct } = require("../controller/AdminController");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post("/add-product", upload.single("productImage"), addProduct);
module.exports = router;
