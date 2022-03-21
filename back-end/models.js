const mongoose = require("mongoose");

// Schema for Teacher login credential
const UserShcema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

// Creating model of schema
const User = mongoose.model("User", UserShcema);

module.exports = User;

// Schema for create class
const classSchema = new mongoose.Schema({
  subject: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  attachment: {
    type: Buffer,
  },
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
