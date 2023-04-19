import React from "react";
import Mountain from "../assets/Mountain.png";
import Trees from "../assets/Trees.png";

const Parallax2 = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="header">
          <img src={Mountain} className="background" />
          <img src={Trees} className="foreground" />
          <h1 className="title">Welcome</h1>
        </div>
      </div>
    </header>
  );
};

export default Parallax2;
