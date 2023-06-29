import React from "react";
import { FaStore } from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="wrapper-header">
      <div className="wrapper-logo">
        {/* Penggunaan react icons  */}
        <FaStore size={32} color="black" />
        Begya Store
      </div>
      <nav className="wrapper-nav">
        <ul className="list-nav">
          <li className="nav-item">
            {/* Untuk menavigasi router ketika di klik akan mengarah kemana  */}
            <NavLink to={"/"}>Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
