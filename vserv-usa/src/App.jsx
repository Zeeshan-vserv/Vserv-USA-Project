import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/home";
import Contact from "./Components/ContactUs/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/contactus" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
