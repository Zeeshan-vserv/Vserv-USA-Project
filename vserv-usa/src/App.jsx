import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./Components/ContactUs/Contact.jsx";
import Nav from "./Components/Navbar/Nav.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/home";
import StaffAugmentation from "./Components/Service/StaffAugmentation.jsx";
function App() {
  return (
    <>
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/staffAugmentation" element={<StaffAugmentation />} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
