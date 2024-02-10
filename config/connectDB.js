const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://salimdev2:salimdev2@cluster0.g9ul6w8.mongodb.net/");
    console.log(" Database connected");
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = connectDB;
