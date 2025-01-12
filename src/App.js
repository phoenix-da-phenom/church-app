import React, {useState}from "react";

import Streamer from "./Pages/Streamer";
import View from "./Pages/View";



const App = () => {
  const [isStreamer, setIsStreamer] = useState(true);
  return (
<div>
      <button onClick={() => setIsStreamer(!isStreamer)}>
        Switch to {isStreamer ? "Viewer" : "Streamer"}
      </button>
      {isStreamer ? <Streamer /> : <View />}
    </div>
    

  );
};

export default App;
