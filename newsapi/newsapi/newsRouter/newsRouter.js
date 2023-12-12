const express = require("express");
const router = express.Router();
const {VerifyToken}=require('../Middleware/authToken')
const {
  SearchByTitle,
  GetnewsByCategory,
} = require("../newsController/NewsController");

router.get("/news/search", SearchByTitle);
router.get("/news", GetnewsByCategory);
module.exports = router;
