const express = require("express");
const router = express.Router();

const client = require("../controllers/client");

router.post("/register", client.createClient);

router.post("/login", client.getClient);

module.exports = router;
