const express = require("express");
//"cors" ENABLE US TO ACCESS RESOURSES FROM DIFFERENT ORIGIN
const cors = require("cors");

//*****************IMPORTING ROUTERS "routers" DIRECTORY*****************

const signUpRouter = require("./routers/signUpRouter");
const loginRouter = require("./routers/loginRouter");

//CALLING "express()" TO START NEW EXPRESS APPLICATION
const app = express();

//"cors()" enables you to access a resource from a different origin.
app.use(cors());

//"express.json()" allows us to accept the data in json format.
app.use(express.json());

//************************ROUTER ENDPOINTS*******************************
app.use("/api/v1/user", signUpRouter);
app.use("/api/v1/signup", signUpRouter);
app.use("/api/v1/signin", loginRouter);

module.exports = app;
