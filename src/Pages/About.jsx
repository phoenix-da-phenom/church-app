import React from "react";
import Content from "../Components/Content";
import NavigationalBar from "../Components/NavigationalBar";
import ChurchDescription from "../Components/ChurchDescription";
import Ourmission from "../Components/Ourmission";

export default function About() {
  return (
    <div>
      <Content>
      <div className="h-[200px] w-full bg-[url('./Image/archive/PHOTO-2022-11-20-12-38-28.jpg')] -z-10 p-8">
      </div>
        <NavigationalBar/>
        <ChurchDescription/>
        <Ourmission/>
       
      </Content>
    </div>
  );
}
