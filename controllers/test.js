const Test = require("../models/test");
const Question = require("../models/question");

function createTest(req, res) {
  let { numberOfQuestions, validity, clientId } = req.body;
  if (!numberOfQuestions || !validity || !clientId) {
    return res.status(400).send({ msg: "Test format is not right!" });
  }

  Question.countDocuments({}, (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    }
    if (result < numberOfQuestions) {
      return res.status(400).send({ msg: "Less questions please!" });
    }
    validity = new Date(validity);

    Test.find({}, (err, result) => {
      if (err) {
        return res.status(500).send({ msg: "Internal server error!" });
      }
      // Unique pin logic
      const pin = result.length ? result[0].pin + 183 : 575759;

      const newTest = new Test({ validity, numberOfQuestions, pin, clientId });

      newTest.save((err, result) => {
        if (err) {
          return res.status(500).send({ msg: "Internal server error!" });
        }
        return res.send({ msg: "Successfully created the test!" });
      });
    })
      .sort({ pin: -1 })
      .limit(1);
  });
}

function allTest(req, res) {
  Question.countDocuments({}, (err, numberOfQuestions) => {
    if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    }
    Test.find({ clientId: req.body.clientId }, (err, result) => {
      if (err) {
        return res.status(500).send({ msg: "Internal server error!" });
      }
      return res.send({ tests: result, numberOfQuestions });
    });
  });
}

module.exports = { createTest, allTest };
