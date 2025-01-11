import React, {useState}from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { ContextProvider } from "./Context/ContextProvider";
import ViewPage from "./Pages/ViewPage";
import Streamer from "./Pages/Streamer";



const App = () => {
  const [isStreamer, setIsStreamer] = useState(true);
  return (
<div>
      <button onClick={() => setIsStreamer(!isStreamer)}>
        Switch to {isStreamer ? "Viewer" : "Streamer"}
      </button>
      {isStreamer ? <Streamer /> : <ViewPage />}
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
