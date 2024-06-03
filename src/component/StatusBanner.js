import React from "react";
import "../css/StatusBanner.css";

const StatusBanner = ({ image, onClose }) => {
  return (
    <div className="status-banner">
      <div className="banner-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <img src={image} alt="Status Banner" className="banner-image" />
      </div>
    </div>
  );
};

export default StatusBanner;
