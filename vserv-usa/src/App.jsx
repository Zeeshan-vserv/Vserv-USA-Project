import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/home";  // Ensure correct casing
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
