const Result = require("../models/result");
const Question = require("../models/question");
const question = require("./question");

function takeTest(req, res, next) {
  const { name, email, numberOfQuestions, testId } = req.body;
  Result.findOne({ email }, (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    }
    if (result) {
      return res.status(400).send({ msg: "Email already exists!" });
    }

    const newResult = new Result({ name, email, numberOfQuestions, testId });

    newResult.save((err, result) => {
      if (err) {
        return res.status(500).send({ msg: "Internal server error!" });
      }
      next();
    });
  });
}
function submitTest(req, res) {
  const { questions, email } = req.body;
  if (!questions || !email) {
    return res.status(400).send({ msg: "Wrong credentials!" });
  }
  Result.findOne({ email }, (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    }
    if (!result) {
      return res.status(401).send({ msg: "Go back!" });
    }

    Question.find({}, (err, result) => {
      if (err) {
        return res.status(500).send({ msg: "Internal server error!" });
      }

      let marks = 0;

      for ({ _id, answer } of questions) {
        for (let question of result) {
          //question._id is an object
          if (question._id == _id && question.answer == answer) {
            ++marks;
          }
        }
      }
      Result.findOneAndUpdate({ email }, { marks }, (err, result) => {
        if (err) {
          return res.status(500).send({ msg: "Internal server error!" });
        }
        return res.send({
          msg: `Successful test submission! got ${marks} out of ${questions.length} answers right!`,
        });
      });
    });
  });
}

function listResult(req, res) {
  const { testId } = req.body;
  Result.find({ testId }, (err, result) => {
    if (err) {
      return res.status(400).send({ msg: "Unsuccess in getting results!" });
    } else {
      return res.send(result);
    }
  });
}

module.exports = { takeTest, submitTest, listResult };
