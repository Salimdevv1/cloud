const User = require("../models/user");
const getUsers = async (req, res) => {
    try {
      const usersList = await User.find();
      res.json(usersList);
    } catch (error) {
      console.log("error", error);
    }
  };


module.exports = {getUsers };