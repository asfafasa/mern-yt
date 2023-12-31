const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes");

require("dotenv").config({ path: ".env" });

const app = express();
const http = require("http").Server(app);

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(route);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB is Connected");
    http.listen(process.env.PORT, process.env.HOST, () => {
      console.log("Server Started");
    });
  })
  .catch((err) => console.log("Error :" + err));
