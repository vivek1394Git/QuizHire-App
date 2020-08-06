const Question = require("../models/question");

function addQuestion(req, res) {
  const { question, opt1, opt2, opt3, opt4, answer } = req.body;
  if (
    !question ||
    !opt1 ||
    !opt2 ||
    !opt3 ||
    !opt4 ||
    !answer ||
    answer > 4 ||
    answer < 1
  ) {
    return res.status(400).send({ msg: "Question format is not right!" });
  }

  const newQuestion = new Question({
    question,
    opt1,
    opt2,
    opt3,
    opt4,
    answer,
  });

  newQuestion.save((err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Intenal server error!" });
    } else {
      return res.send({ msg: "Success in creating question!" });
    }
  });
}

function allQuestion(req, res) {
  Question.find({}, (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Intenal server error!" });
    } else {
      return res.send(result);
    }
  });
}

function testQuestion(req, res) {
  Question.find({}, (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Intenal server error!" });
    } else {
      function shuffleTheArray(arr) {
        //Fisher Yates shuffling algorithm
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      shuffleTheArray(result);
      const { email } = req.body;
      const questionsData = result.slice(0, req.body.numberOfQuestions);
      const questions = [];
      for (let questionData of questionsData) {
        const { _id, question, opt1, opt2, opt3, opt4 } = questionData;
        questions.push({ _id, question, opt1, opt2, opt3, opt4 });
      }
      return res.send({ email, questions });
    }
  });
}

function updateQuestion(req, res) {
  console.log(req.body);
  const { question, opt1, opt2, opt3, opt4, answer } = req.body;
  if (
    !question ||
    !opt1 ||
    !opt2 ||
    !opt3 ||
    !opt4 ||
    !answer ||
    answer > 4 ||
    answer < 1
  ) {
    return res.status(400).send({ msg: "Question format is not right!" });
  }

  Question.findOneAndUpdate(
    { _id: req.body.id },
    { question, opt1, opt2, opt3, opt4, answer },
    (err, result) => {
      if (err) {
        return res.status(500).send({ msg: "Internal server error!" });
      } else {
        return res.send({ msg: "Success in updating question!" });
      }
    }
  );
}

function deleteQuestion(req, res) {
  Question.findOneAndRemove({ _id: req.body.id }, (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    } else {
      if (!result) {
        return res.status(400).send({ msg: "No such question!" });
      }
      return res.send({ msg: "Success in deleting question!" });
    }
  });
}

module.exports = {
  addQuestion,
  allQuestion,
  testQuestion,
  updateQuestion,
  deleteQuestion,
};
