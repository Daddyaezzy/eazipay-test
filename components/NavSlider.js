import React from "react";

import { FaTimes } from "react-icons/fa";

const NavSlider = ({ handleClick }) => {
  return (
    <div className="nav-slider-container">
      <div className="fa-times">
        <FaTimes className="menuTimes" onClick={handleClick} />
      </div>
      <ul className="nav-slider">
        <li>
          <a href="">Individual</a>
        </li>
        <li>
          <a href="">Business</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Set your payroll</a>
        </li>
      </ul>
      <div className="nav-slider-btn">
        <button className="authLogin">
          <a href="/login">Login</a>
        </button>
        <button className="authRegister">
          <a href="/register">Register</a>
        </button>
      </div>
    </div>
  );
};

export default NavSlider;
