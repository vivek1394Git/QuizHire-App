const express = require("express");
const router = express.Router();

const verifyToken = require("../AuthCheck");

const result = require("../controllers/result");
const question = require("../controllers/question");

const Test = require("../models/test");

function checkValidity(req, res, next) {
  const { name, email, pin } = req.body;
  Test.findOne({ pin }, (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    } else {
      if (!result || !name || !email) {
        return res.status(400).send({ msg: "Wrong credentials!" });
      }
      if (result.validity < new Date()) {
        return res.status(400).send({ msg: "The test has been expired!" });
      }
      req.body.testId = result._id;
      req.body.numberOfQuestions = result.numberOfQuestions;
      next();
    }
  });
}

router.post("/takeTest", checkValidity, result.takeTest, question.testQuestion);

router.post("/submitTest", result.submitTest);

router.post("/listResult", verifyToken, result.listResult);

module.exports = router;
