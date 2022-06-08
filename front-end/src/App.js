import React, { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import TeacherLogin from "./Components/TeacherLogin";
import StudentLogin from "./Components/StudentLogin";
import NavBar from "./Components/NavBar";
import CreateClass from "./Pages/CreateNewClass";
import SignUp from "./Components/SignUp";
import Signin from "./Components/Signin";
import Home from "./Components/Home";
import SearchBox from "./Components/SearchBox";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
