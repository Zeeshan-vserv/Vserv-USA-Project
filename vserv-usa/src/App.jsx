import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";  // Ensure correct casing
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
