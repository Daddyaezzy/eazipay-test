"use client";
import { useState } from "react";
import Image from "next/image";
import NavSlider from "./NavSlider";
import { FaBars } from "react-icons/fa";
import "../app/globals.css";

const Navbar = () => {
  const [slider, setSlider] = useState(false);

  const handleClick = () => {
    setSlider(!slider);
  };
  return (
    <nav className="navBar">
      <a href="/">
        <Image
          src="/EAZIPAY LOGO NEW 1.png"
          alt="eazipay logo"
          width={150}
          height={30}
        />
      </a>
      <ul className="navList">
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

      <div className="auth-btn">
        <button className="authLogin">
          <a href="/login">Login</a>
        </button>
        <button className="authRegister">
          <a href="/register">Register</a>
        </button>
      </div>
      <div className="hamburger" onClick={() => handleClick()}>
        <FaBars className="menuIcon" />
      </div>
      {slider && <NavSlider handleClick={handleClick} />}
    </nav>
  );
};

export default Navbar;
