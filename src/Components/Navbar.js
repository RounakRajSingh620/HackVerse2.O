import React from "react";
import logo from "../assets/newLogo.jpeg";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navBar">
      <Link to="/">  <img className="logo" src={logo} alt="logo" />    </Link>

      <div className="left">
        <Link to="/" className="navLink">HOME</Link>
        <Link to="/owner" className="navLink">RENT</Link>
        <div className="connect">Connect Metamask</div>
      </div>
    </nav>
  );
}