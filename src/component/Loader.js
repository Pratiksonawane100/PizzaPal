import React from "react";
import "./Loader.css"; // Import the CSS file for loader styling
import loaderGif from "../Images/Loader.gif"; // Import the GIF file

const Loader = () => {
  return (
    <div className="container">
      <img src={loaderGif} alt="Loading..." className="image" />{" "}
      {/* Use the GIF */}
    </div>
  );
};

export default Loader;
