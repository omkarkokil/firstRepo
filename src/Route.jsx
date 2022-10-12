import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Login from "./Component/Login/Login";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/studentLogin" element={<Login />} />
      <Route exact path="/teacher" element={<Login />} />
    </Routes>
  );
};
export default App;
