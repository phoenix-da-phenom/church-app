import React, {useState}from "react";

import Streamer from "./Pages/Streamer";
import View from "./Pages/View";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


const App = () => {
  const [isStreamer, setIsStreamer] = useState(true);
  return (
<div>
      <button onClick={() => setIsStreamer(!isStreamer)}>
        Switch to {isStreamer ? "Viewer" : "Streamer"}
      </button>
      {isStreamer ? <Streamer /> : <View />}
    </div>
    

    // <Routes>
      
    //   <Route path="/" element={<Home />} />
    //   <Route path="/home" element={<Home />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/contact" element={<Contact />} /> 
    //   <Route path="/view" element={<ViewPage/>} /> 
    // </Routes>


  );
};

export default App;
