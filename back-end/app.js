const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json()); // allows us to accept the data in json format.

const upload = multer({
  dest: "uploads",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.endsWith(".pdf")) console.log(file.originalname);
    cb(new Error("File format is incorrect"));
    cb(null, true);
  },
});

app.post("/upload", upload.single("uploads"), (req, res) => {
  res.send();
});
//********API****** */
//GET request
/* app.get("/getdata", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send("Its working, fetched data from backend");
}); */

// POST request
app.post("/teacher", (req, res) => {
  const user = new userModel(req.body);

  try {
    user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST request for creating class
/* app.post("/class", (req, res) => {
  const classes = new userModel(req.body);

  try {
    classes.save();
    res.send(classes);
  } catch (err) {
    res.status(500).send(err);
  }
}); */

// Database connection
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

//Router
app.use("/", require("./router"));

//---------------------- Deployment --------------------
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../front-end/build")));
} else {
  console.log("App running on problem");
}
//-------------------------------------------------------

app.listen(port, () => console.log(`Server running on ${port} port`));

// app.use("/getdata", routers);
