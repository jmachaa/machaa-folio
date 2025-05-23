import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";
import NewHome from "./components/NewHome";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewHome />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
    
  );
};

export default App;
