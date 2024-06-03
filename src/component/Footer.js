import React from "react";
import "../App.css";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour < closeHour && hour >= openHour;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            libero consequat, consectetur metus vel, eleifend lorem. Nam
            faucibus sapien id enim faucibus.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>123 Main Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-column">
          <h3>Opening Hours</h3>
          {isOpen ? (
            <p>
              We're Open Until {closeHour}:00 PM. Come Visit Us or Order Online.
            </p>
          ) : (
            <p>
              We're Happy To Welcome You Between {openHour}:00 AM and{" "}
              {closeHour}:00 PM.
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
