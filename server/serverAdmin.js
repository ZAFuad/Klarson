const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require("./Routes/AdminRouter");
const { url, PORTADMIN } = require("./env/env");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/admin", Routes);
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      app.listen(PORTADMIN, (err) => {
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
