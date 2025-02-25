import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./Components/ContactUs/Contact.jsx";
import Nav from "./Components/Navbar/Nav.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/home";
import StaffAugmentation from "./Components/Service/StaffAugmentation.jsx";
import WhatWeThink from "./Components/whatWeThink/whatWeThink.jsx";
import ITSupportAndManagedServices from "./Components/Service/ITSupportAndManagedServices.jsx";
import ECommerceSolutions from "./Components/Service/ECommerceSolutions.jsx";
import PrototypingAndUiUxDesign from "./Components/Service/PrototypingAndUiUxDesign.jsx";
import EnterpriseDigitalTransformation from "./Components/Service/EnterpriseDigitalTransformation.jsx";
import ProductEngineering from "./Components/Service/ProductEngineering.jsx";
import InternetOfThings from "./Components/Service/InternetOfThings.jsx";
import MobileAppDevelopment from "./Components/Service/MobileAppDevelopment.jsx";

function App() {
  return (
    <>
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/staffAugmentation" element={<StaffAugmentation />} />
        <Route path="/it-support-management-service" element={<ITSupportAndManagedServices />} />
        <Route path="/e-commerce-solution" element={<ECommerceSolutions />} />
        <Route path="/prototyping-ui-design" element={<PrototypingAndUiUxDesign />} />
        <Route path="/enterprise-digital-transformation" element={<EnterpriseDigitalTransformation />} />
        <Route path="/product-engineering" element={<ProductEngineering />} />
        <Route path="/internet-Of-things" element={<InternetOfThings />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/what-we-think" element={<WhatWeThink />} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
