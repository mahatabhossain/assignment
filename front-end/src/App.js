import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
