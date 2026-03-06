const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({

  title: {
    type: String
  },

  content: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;