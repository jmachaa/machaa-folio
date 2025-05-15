import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import NewHome from "./components/NewHome";
import Portfolio from "./components/Portfolio";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/new" element={<NewHome />} />
        <Route path="/folio" element={<Portfolio />} />
      </Routes>
    </Router>
    
  );
};

export default App;
