import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/home";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;