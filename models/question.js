const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
    question: {
      type: String,
      required: true
    },
    opt1: {
      type: String,
      required: true
    },
    opt2: {
      type: String,
      required: true
    },
    opt3: {
      type: String,
      required: true
    },
    opt4: {
      type: String,
      required: true
    },
    answer: {
      type: Number,
      required: true
    }
});

// Model
const Question = mongoose.model('Question', QuestionSchema);

module.exports =  Question;