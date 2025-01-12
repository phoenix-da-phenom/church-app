import React, {useState}from "react";

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
    

  );
};

export default App;
