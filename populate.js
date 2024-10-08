require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/Task");
const jsonProducts = require("./product.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
