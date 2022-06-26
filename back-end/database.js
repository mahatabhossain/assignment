const mongoose = require("mongoose");

mongoose.set("debug", true);
//**************DATABASE CONNECTION ESTABLISHMENT******************
mongoose.connect(
  "mongodb+srv://assignment:zsTQRFTl0tF8uH0V@cluster0.zhoox.mongodb.net/moviedb?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("database connected successfully");
});

module.exports = db;
