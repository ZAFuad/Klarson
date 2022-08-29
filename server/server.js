const express = require("express");
const data = require("./data");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/sliderData", (req, res) => {
  res.send(data.sliderData);
});

app.get("/api/category", (req, res) => {
  res.send(data.category);
});


app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x)=>x.slug === req.params.slug);
  if(product){
    res.send(product);
  }else{
    res.status(404).send({message: 'Product not found'});
  }
});

app.listen(PORT, () => {
  console.log(`server at http://localhost:${PORT}`);
});
