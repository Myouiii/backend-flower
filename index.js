const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cateRoute = require("./routes/category");
//const { use } = require("./routes/auth");
const MongoClient = require("mongodb").MongoClient;

// MongoClient.connect(process.env.MONGODB_URL, () => {
//   console.log("Đã kết nối tới database");
// });

dotenv.config();
const app = express();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("CONNECTED TO MONGODB");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/product", productRoute);
app.use("/v1/cart", cartRoute);
app.use("/v1/order", orderRoute);
app.use("/v1/checkout", stripeRoute);
app.use("/v1/cate", cateRoute);

app.listen(8001, () => {
  console.log("Server is running");
});
