import Image from "next/image";
import "./homePage.css";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import Individual from "@/components/Individual";
import Steps from "@/components/Steps";
import Salary from "@/components/Salary";
import Demo from "@/components/Demo";

export default function Home() {
  return (
    <main>
      <section className="home-section">
        <>
          <div className="flex-container">
            <div className="partOne">
              <h1>
                Run your <span>payroll</span> <span>easily</span> in{" "}
                <span>seconds</span>{" "}
              </h1>
              <p>
                We’ve built an all-inclusive simple solution for individual and
                businesses to manage staff, pay salaries, bills, and relevant
                taxes all at once.
              </p>
              <button className="btn">
                <a href="">Start Using Free, Forever</a>
              </button>
              <div className="appDownload">
                <h4>Download the Eazipay App</h4>

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
            </div>
            <div className="partTwo">
              <div className="desktopImg-container">
                <div className="circle">
                  <Image
                    className="desktopImg"
                    src="/Desktop - 1.png"
                    width={400}
                    height={300}
                  />
                  <Image
                    src="/Frame 48096250.png"
                    width={290}
                    height={130}
                    style={{ position: "absolute", top: "-10px", left: "10px" }}
                    className="desktopImg-comment"
                  />
                  <Image
                    src="/Frame 48096240.png"
                    width={290}
                    height={130}
                    style={{
                      position: "absolute",
                      top: "180px",
                      left: "-120px",
                    }}
                    className="desktopImg-comment"
                  />
                  <Image
                    src="/Payroll List 2 Fill.png"
                    width={290}
                    height={110}
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "-20px",
                    }}
                    className="desktopImg-comment"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      </section>
      <section className="individual-section">
        <Individual />
      </section>
      <section className="steps-section">
        <Steps />
      </section>
      <section className="salary-section">
        <Salary />
      </section>
      <section className="demo-section">
        <Demo />
      </section>
    </main>
  );
}
