import React, { useState } from "react";
import "../css/Status.css";
import StatusBanner from "./StatusBanner";
import crsl1 from "../Images/crsl1.jpg";
import crsl2 from "../Images/crsl2.jpg";
import crsl3 from "../Images/crsl3.jpg";
import crsl4 from "../Images/crsl4.png";
import crsl5 from "../Images/crsl5.jpg";
import crsl6 from "../Images/crsl6.jpg";
import crsl7 from "../Images/crsl7.png";
import crsl8 from "../Images/crsl8.png";

const images = [
  crsl1, // Replace with actual image URLs
  crsl2,
  crsl3,
  crsl4,
  crsl5,
  crsl6,
  crsl7,
  crsl8,
];

const Status = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  const handleClick = (image) => {
    setLoading(true);
    setActiveImage(image);
    setTimeout(() => setLoading(false), 2000); // Simulating loading for 2 seconds
    setBannerOpen(true);
    document.body.classList.add("banner-open");
  };

  const handleClose = () => {
    setActiveImage(null);
    setBannerOpen(false);
    document.body.classList.remove("banner-open");
  };

  return (
    <div className={`status-container ${bannerOpen ? "banner-open" : ""}`}>
      <div className="status">
        {images.map((image, index) => (
          <div
            key={index}
            className="status-item"
            onClick={() => handleClick(image)}
          >
            {loading && activeImage === image && (
              <div className="loading"></div>
            )}
            <img src={image} alt={`status-${index}`} />
          </div>
        ))}
      </div>
      {activeImage && (
        <StatusBanner image={activeImage} onClose={handleClose} />
      )}
    </div>
  );
};

export default Status;
