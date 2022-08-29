const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require("./Routes/BankRouter");
const { url, PORTBANK } = require("./env/env");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/bank", Routes);
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      app.listen(PORTBANK, (err) => {
        if (!err) {
          console.log("Connection Established");
        } else {
          console.log(`${err}`);
        }
      });
    } else {
      console.log(err);
    }
  }
);
