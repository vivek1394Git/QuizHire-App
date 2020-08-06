const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const ResultSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  testId: {
    type: Schema.Types.ObjectId,
  },
  numberOfQuestions: {
    type: Number,
    required: true,
  },
  marks: {
    type: Number,
    default: 0,
  },
});

// Model
const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;
