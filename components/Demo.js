import React from "react";
import Image from "next/image";
import "@/styles/demo.css";

const Demo = () => {
  return (
    <>
      <div className="demo-container">
        <Image
          src="/Frame 29.png"
          width={150}
          height={120}
          style={{ position: "absolute", top: "0", left: "10px" }}
        />
        <div className="demo-partOne">
          <div className="demo-writing">
            <h2>Get an Exclusive Demo of Eazipay</h2>
            <p>
              Our greatest priority is to put you and your business first. Let’s
              show you how we can help.
            </p>
          </div>
        </div>
        <div className="demo-partTwo">
          <form action="">
            <h4>First things first</h4>
            <p>
              We want to serve you better.
              <br /> Tell us a bit about yourself or company
            </p>
            <div className="switch-btn">
              <button className="form-btn">Individual</button>
              <button className="form-btn2">Company</button>
            </div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Job Size" />
            <input type="text" placeholder="Company Size" />
            <div className="submit-btn">
              <button className="form-btn">Request Demo</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Demo;
