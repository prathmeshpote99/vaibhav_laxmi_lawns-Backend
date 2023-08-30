const express = require("express");
const router = express.Router();
const lController = require("../controller/lawnsController");

router.post("/add", lController.Add);

module.exports = router;
