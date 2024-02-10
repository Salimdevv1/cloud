const express = require("express");

const {
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

router.get("/all", getUsers);


module.exports = router;