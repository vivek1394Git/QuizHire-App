const express = require("express");
const router = express.Router();

const verifyToken = require("../AuthCheck");

const question = require("../controllers/question");

function isAdmin(req, res, next) {
  if (req.body.isAdmin) {
    next();
  } else return res.status(401).send({ msg: "You're not authorized!" });
}

router.post("/", verifyToken, isAdmin, question.allQuestion);

router.post("/add", verifyToken, isAdmin, question.addQuestion);

router.put("/update", verifyToken, isAdmin, question.updateQuestion);

router.delete("/delete", verifyToken, isAdmin, question.deleteQuestion);

module.exports = router;
