import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./model/userModel.js";
import Product from "./model/productModel.js";
import Order from "./model/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();
const importData = async () => {
  try {
    await Order.deleteMany(); //first thing clearing all the product models
    await Product.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminiUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminiUser };
    });

    await Product.insertMany(sampleProducts);
    console.log("DAta imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.deleteMany(); //first thing clearing all the product models
    await Product.deleteMany();
    await User.deleteMany();

    console.log("DAta destroyed");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
