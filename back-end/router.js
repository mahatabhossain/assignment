const express = require("express");
const app = express();
const router = express.Router();
const userModel = require("./models");
const multer = require("multer");

//post request
/* router.post("/class", (req, res) => {
  const classes = new userModel(req.body);

  try {
    classes.save();
    res.send(classes);
  } catch (err) {
    res.status(500).send(err);
  }
}); */
/* 
router.post("/teacher", (req, res) => {
  const user = new userModel(req.body);

  try {
    user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
}); */

router.route("/class").post((req, res) => {
  /*   const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email; */

  /*  const attachments = multer({
    limits: {
      fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
      if (file.originalName.match(/\(.pdf)$/))
        return cb(new Error("Please select correct file format"));
      cb(undefined, true);
    },
  }); */

  const { subject, firstName, lastName, email, attachment } = req.body;

  const newClass = new userModel({
    subject,
    firstName,
    lastName,
    email,
    attachment,
  });

  console.log();
  newClass.save();
  res.send(newClass);
});

//get request
router.route("/getdata").get((req, res) => {
  userModel.find().then((getClass) => res.json(getClass));
});

module.exports = router;
