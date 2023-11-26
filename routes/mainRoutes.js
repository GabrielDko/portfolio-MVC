const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

router.use("/", mainController.home)
router.use("/about", mainController.about)

module.exports = router;