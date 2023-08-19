import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <Image src="/EAZIPAY LOGO NEW 2.png" width={150} height={60} />
        <p>Copyright &copy; 2023 Eazipay. </p>
        <p>All rights reserved</p>
        <div className="footer-icons">
          <div className="fa-icon">
            <FaFacebook className="footer-icon" />
          </div>
          <div className="fa-icon">
            <FaTwitter className="footer-icon" />
          </div>
          <div className="fa-icon">
            <FaInstagram className="footer-icon" />
          </div>
          <div className="fa-icon">
            <FaLinkedin className="footer-icon" />
          </div>
        </div>
      </div>
      <div className="footer1">
        <h4>Product</h4>
        <p>Individual</p>
        <p>Business</p>
        <p>Request Demo</p>
        <p>Pricing</p>
      </div>
      <div className="footer1">
        <h4>Legal</h4>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="footer1">
        <h4>Resources</h4>
        <p>FAQs</p>
        <p>Blog</p>
        <p>Career</p>
        <p>Customer Stories</p>
      </div>
      <div className="footer1">
        <h4>Contact Us</h4>
        <p>eazipay@gmail.com</p>
        <p>+234 816 878 9518</p>
        <div className="send-email">
          <input type="text" placeholder="Your Email Address" />
          <TbSend />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
