const express = require("express");
const app = express();
const router = express.Router();
const signUPModels = require("./models");

router.route("/signup").post(async (req, res) => {
  const signup = new signUPModels(req.body);
  try {
    await signup.save();
    res.send(signup);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Sign up failed",
      data: {
        signup: "Check your data",
      },
    });
  }
});

router.route("/login").post(async (req, res) => {
  //Check email and password
  const { email, password } = req.body;
  if (!email) return res.status(401).json({ msg: "email is missing" });
  if (!password) return res.status(401).json({ msg: "password is missing" });

  const signInData = await signUPModels.findOne({ email, password });

  if (signInData) {
    res.status(200).json({ msg: "you have logged in successfully" });
  } else {
    res.status(406).json("Unable to login");
    res.redirect("/login");
    console.log("Login failed");
  }
});

module.exports = router;
