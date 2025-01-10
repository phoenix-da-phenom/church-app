import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { ContextProvider } from "./Context/ContextProvider";
import StreamPage from "./Pages/StreamPage";



const App = () => {
  return (
   
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/stream" element={<StreamPage/>} /> 
    </Routes>

  );
};

export default App;
