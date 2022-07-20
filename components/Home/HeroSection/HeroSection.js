/* eslint-disable @next/next/no-img-element */
import { FaDownload } from "react-icons/fa";
import React from "react";
import Typewriter from "typewriter-effect";
// import styles from "../../../styles/HeroSection.module.css";
import styles from "../../../styles/particles.module.css";
import "animate.css";

const HeroSection = () => {
  return (
    <div>
      <div className="main-container">
        <div className="main">
          <div className="header">
            {/* <div className="blur hero-blur"></div> */}
            <div className="hero-container">
              <div className="row-1 full-screen">
                <div className="home-text">
                  <h1 className="banner-logo">Shajibul Alam Shihab</h1>
                  <div className="banner-skills">
                    <h1>Have skills of </h1>
                    <h1 className="skills">
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: true,
                          delay: 90,
                          strings: [
                            "JavaScript",
                            "React.js",
                            "HTML",
                            "CSS",
                            "C (BASIC)",
                            "C++ With OOP",
                            "Java",
                            "MongoDB",
                            "MySQL",
                          ],
                        }}
                      ></Typewriter>
                    </h1>
                  </div>
                  <br />
                  <br />
                  <a
                    style={{ textDecoration: "none" }}
                    className="btn-1 outer-shadow hover-in-shadow"
                    href={
                      "https://drive.google.com/u/0/uc?id=13ISob0W9dDRVSax7bJU_5vqrlawZ4cI_&export=download"
                    }
                    download="Shajibul_Alam_Resume.pdf"
                  >
                    Download Resume <FaDownload />
                  </a>
                </div>
                <div className="home-img mx-auto">
                  <div className="img-box inner-shadow">
                    <img
                      className="outer-shadow"
                      src="https://i.ibb.co/nkCMPnY/my1.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>
    </div>
  );
};

export default HeroSection;
