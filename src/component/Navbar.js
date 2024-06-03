import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Images/logo.png"; // Import your logo image here
import menu from "../Images/menu.png";
import { useLocation } from "react-router-dom";

function Navbar({ cartSize }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Toggle menu-open class on body
    document.body.classList.toggle("menu-open");
  };
  const location = useLocation();

  // Hide the navigation bar on the login page ("/login")
  if (location.pathname === "/login") {
    return null;
  }
  if (location.pathname === "/") {
    return null;
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={Logo}
          alt="Pizza Company Logo"
          className="company-logo"
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <Link className="a" to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/menu" onClick={() => setMenuOpen(false)}>
          Menu
        </Link>

        <Link to="/menudessert" onClick={() => setMenuOpen(false)}>
          Dessert
        </Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          Cart <span className="cart-size">{cartSize}</span>
        </Link>
        <Link to="/orders" onClick={() => setMenuOpen(false)}>
          Orders
        </Link>
      </div>

      <div
        className={`menu-btn__burger1 menu-btn ${
          menuOpen ? `open ${menu}` : ""
        }`}
      >
        <img src={menu} alt="" onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
