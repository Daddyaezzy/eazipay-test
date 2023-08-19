import React from "react";
import "@/styles/salary.css";
import Image from "next/image";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

const Salary = () => {
  return (
    <>
      <div className="salary-container">
        <div className="salary-partOne">
          <Image
            src="/Frame 25.png"
            width={100}
            height={100}
            style={{ position: "absolute", top: "0", left: "190px" }}
          />
          <h2>
            Free forever <br /> for your{" "}
            <span>
              salary <br /> payment
            </span>
          </h2>
          <p>Subscribe to the Eazipay today.</p>
          <div className="store-container">
            <div className="store googlePlay">
              <div className="downloadIcon-container">
                <FaGooglePlay className="downloadIcon" />
              </div>
              <div className="googlePlay-content">
                <p>Get on</p>
                <p>Google Play</p>
              </div>
            </div>
            <div className="store appStore">
              <div className="downloadIcon-container">
                <FaAppStore className="downloadIcon" />
              </div>
              <div className="appStore-content">
                <p>Download on </p>
                <p>App Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="salary-partTwo">
          <div className="salary-comment">
            <Image
              className="comment-img"
              src="/Ellipse 30.png"
              width={50}
              height={50}
            />
            <p>Adebayo Kemi</p>
            <p>Arts and Promotion officer</p>
            <p>Female | Weekly</p>
            <p className="payment">N150,600.78</p>
          </div>
          <div className="salary-photo">
            <Image
              src="/technology-online-shopping-concept-happy-black-man-rejoicing-winning-app-holding-smartphone-scream-yes-standing-pink-background 1.png"
              width={350}
              height={350}
              className="salary-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Salary;
