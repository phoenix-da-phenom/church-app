import React, { useEffect } from "react";
import StreamNavBar from "../Components/StreamNavBar";
import VideoComponent from "../Components/VideoComponent";
import VideoPlaylist from "../Components/VideoPlaylist";

export default function StreamPage() {

 
  useEffect(()=>{
 //alert user there no video at the momet
 alert("No video at the momemnt <br/> Try agin later")
  },[])
  return (
    <div>
      <StreamNavBar />
      <div id="parent" className="container flex justify-between pt-5">
        <div id="leftSide" className="w-50">
          <VideoComponent />
        </div>

        <div id="rightSide" className="p-8 w-50" >
          <VideoPlaylist />
        </div>
      </div>
    </div>
  );
}
