import React, { useState, useEffect } from "react";
import "../css/CookieMessage.css";

const CookieMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show message after 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleAccept = () => {
    // Handle accept logic, e.g., set a cookie
    setIsVisible(false);
  };

  const handleDeny = () => {
    // Handle deny logic, e.g., set a different cookie or do nothing
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-message">
      <button className="close-btn" onClick={handleClose}>
        X
      </button>
      <p>
        We use cookies to improve your experience on our site. By accepting, you
        agree to our use of cookies. You can learn more in our privacy policy.
      </p>
      <div className="cookie-buttons">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDeny}>Deny</button>
      </div>
    </div>
  );
};

export default CookieMessage;
