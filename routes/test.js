const express = require("express");
const router = express.Router();

const verifyToken = require("../AuthCheck");

const test = require("../controllers/test");

router.post("/create", verifyToken, test.createTest);

router.post("/", verifyToken, test.allTest);

module.exports = router;
