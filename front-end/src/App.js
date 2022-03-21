import React, { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import TeacherLogin from "./Components/TeacherLogin";
import StudentLogin from "./Components/StudentLogin";
import NavBar from "./Components/NavBar";
import CreateClass from "./Pages/CreateNewClass";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<CreateClass />} />
        <Route path="/teacher" element={<TeacherLogin />} />
        <Route path="/student" element={<StudentLogin />} />
      </Routes>
    </div>
  );
}

export default App;
