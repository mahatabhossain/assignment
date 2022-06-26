const signUpModel = require("../models/signup.model");

//=======================// CREATE USER (SIGN UP) //=======================
exports.userSignUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName)
    return res.status(402).json({ message: "firstName not found" });
  if (!lastName) return res.status(402).json({ message: "lastName not found" });
  if (!email) return res.status(402).json({ message: "email not found" });
  if (!password) return res.status(402).json({ message: "Password not found" });

  const signup = new signUpModel(firstName, lastName, email, password);
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
};

//=======================// GET USER (SIGN UP) //=======================
exports.getUser = async (req, res) => {
  try {
    const users = await signUpModel.find();
    return res.status(200).json({ data: users });
  } catch (err) {
    return res.status(500).json({ Msg: "Something went wrong" });
  }
};

//=======================// UPDATE USER //=======================
exports.updateUser = async (req, res) => {
  try {
    await signUpModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "Success",
      data: {
        user: "User updated",
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err,
    });

    console.log(err);
  }
};

//=======================// DELETE USER //=======================
exports.deleteUser = async (req, res) => {
  try {
    await signUpModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        user: "User deleted",
      },
    });
  } catch (err) {
    res.status(404).json({
      satus: "Delete failed",
      message: err,
    });
  }
};
