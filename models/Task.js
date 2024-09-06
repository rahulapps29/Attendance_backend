const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  tdate: {
    type: Date,
    required: [true, "must provide date"],
    default: Date.now,
  },
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [200, "name can not be more than 200 characters"],
  },

  completed: {
    type: Boolean,
    default: false,
  },
  year: { type: Number },
  month: { type: Number },
  year_month: { type: String },
  date_string: { type: String },
  location: {
    type: String,
    required: [true, "must provide location"],
    trim: true,
    maxlength: [200, "location can not be more than 200 characters"],
  },
  emp_id: {
    type: String,
    required: [false, "must provide location"],
    trim: true,
    maxlength: [200, "location can not be more than 200 characters"],
  },
});

module.exports = mongoose.model("Task", TaskSchema);
