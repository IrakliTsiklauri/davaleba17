import React from "react";
import img from "../assets/ShutterIsland.jpg";

const HomePage = () => {
  return (
    <div className="main-div">
      <div className="shutter">
        <img src={img} alt={img} />
      </div>
      <p className="character-name">Teddy Daniels</p>
    </div>
  );
};

export default HomePage;
