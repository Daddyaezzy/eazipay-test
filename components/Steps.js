import React from "react";
import Image from "next/image";
import "@/styles/steps.css";

const Steps = () => {
  return (
    <>
      <div className="steps">
        <div className="steps-titles">
          <h2>How Eazipay Works</h2>
          <p>Get started in 3 simple steps.</p>
        </div>
        <div className="steps-area">
          <div className="circle1">
            <div className="circle2">
              <div className="circle3">
                <Image src="/onbrdng 2.png" width={250} height={500} />
              </div>
            </div>
          </div>
          <div className="each-step">
            <Image
              className="step-link1"
              src="/Mask group3.png"
              width={40}
              height={200}
              style={{ position: "absolute", top: "50px", left: "-40px" }}
            />
            <div className="one-step">
              <div className="stepNumber firstStep">
                <p style={{ color: "white" }}>
                  <strong>1</strong>
                </p>
              </div>
              <div className="step-content">
                <h4>Create your free account</h4>
                <p>Click here to set up your Eazipay account.</p>
              </div>
            </div>

            <div className="one-step">
              <div className="stepNumber">
                <p>
                  <strong>2</strong>
                </p>
              </div>
              <div className="step-content">
                <h4>Add Employee Data</h4>
                <p>Your employee information is 100% safe and secure.</p>
              </div>
            </div>
            <Image
              className="step-link2"
              src="/Mask group4.png"
              width={350}
              height={205}
              style={{ position: "absolute", top: "240px", right: "15px" }}
            />
            <div className="one-step">
              <div className="stepNumber">
                <p>
                  <strong>3</strong>
                </p>
              </div>
              <div className="step-content">
                <h4>Prepare your Transaction</h4>
                <p>
                  Run payroll:Bulk Salaries and Compliance are done at once!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
