const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json()); // allows us to accept the data in json format.

// DATABASE CONNECTION
mongoose.connect(
  "mongodb+srv://myNewDatabase:Mahatab123@cluster0.zhoox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("database connected successfully");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"));
  });
});

//ROUTER
app.use("/", require("./router"));
//------------------------------------------------------

//SERVER
app.listen(port, () => console.log(`Server running on ${port} port`));
