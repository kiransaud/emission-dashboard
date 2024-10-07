import "./Nav.css";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import logo from "../../assets/impactOS1.png";

function Navigation({ setCurrentPage, darkMode, toggleDarkMode }) {
  const navigate = (path) => {
    window.history.pushState(null, "", path);
    setCurrentPage(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="askKauko" onClick={() => navigate("/")} />
      </div>
      <ul className="navbar-links">
        <li><a href="#" onClick={() => navigate("/home")}>Home</a></li>
        <li><a href="#" onClick={() => navigate("/search")}>Search</a></li>
        <li><a href="#" onClick={() => navigate("/contribute")}>Contribute</a></li>
        <li><a href="#" onClick={() => navigate("/community")}>Community</a></li>
        <li><a href="#" onClick={() => navigate("/api-docs")}>API Docs</a></li>
        <li><a href="#" onClick={() => navigate("/about-us")}>About Us</a></li>
      </ul>
      <div className="navbar-auth">
        <button onClick={() => navigate("/signup")} className="auth-button">Sign Up</button>
        <button onClick={() => navigate("/login")} className="auth-button">Login</button>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
}

export default Navigation;

