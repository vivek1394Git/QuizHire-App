const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const TestSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  numberOfQuestions: {
    type: Number,
    required: true,
  },
  validity: {
    type: Date,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
    default: 575757,
  },
});

// Model
const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
