// Header.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="Coolinaire Logo" />
        <span>Coolinaire</span>
      </Link>
      <nav>
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/contact" className="nav-link">Отклик</Link>
      </nav>
    </header>
  );
};

export default Header;
