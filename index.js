const mongoose = require("mongoose");
const express = require("express");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from node api server you page");
});

//delete a product

mongoose
  .connect(
    "mongodb+srv://admin:prajwal2000@backenddb.q5fldcx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Error in connecting to database");
  });
