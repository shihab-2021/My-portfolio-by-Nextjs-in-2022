/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../../styles/About.module.css";
import { FaDownload } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div id={styles.about}>
      <section
        id="about"
        // className="about-section section"
        // className={styles.about_section}
        className={`${styles["about-section "]} ${styles["section"]}`}
      >
        <div className="container pt-5">
          <div className="row">
            <div
              // className="about-img col-12 col-md-6 d-flex align-items-center justify-content-center flex-column"
              className={`${styles["about-img"]} col-12 col-md-6 d-flex align-items-center justify-content-center flex-column`}
            >
              <img
                id={`${styles["about-img"]}`}
                className="img-fluid inner-shadow"
                src="https://i.ibb.co/p30LGnY/about-owner.jpg"
                alt=""
              />
              <div className={`${styles["social-links"]}`}>
                <a
                  className="outer-shadow hover-in-shadow"
                  href="https://www.facebook.com/shajibulalam.shihab/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
                <a
                  className="outer-shadow hover-in-shadow"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/md-shajibul-alam-shihab-b96576216/"
                >
                  <BsLinkedin />
                </a>
                <a
                  className="outer-shadow hover-in-shadow"
                  href="https://www.instagram.com/shajibul_alam_shihab/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a
                  className="outer-shadow hover-in-shadow"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/shihab-2021"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="about-info col-12 col-md-6 d-flex align-items-center">
              <div style={{ fontFamily: `'Arima', cursive` }}>
                <p>
                  <span className="fw-bold">
                    Hi! I am Shihab. I am a Web Developer.{" "}
                  </span>{" "}
                  I have worked both in web and software development. But
                  currently doing web development seriously. I can develop
                  website by using HTML, CSS, JavaScript, React.js, Bootstrap,
                  Tailwind and so on. I have did more than 12 web project. I can
                  adjust with innovative tach or new feature of programming
                  easily.
                </p>
                <div className={`${styles.about_blur} blur`}></div>
                <p>
                  I also know Basic C programing, C++, Java(Basic). I have a
                  little bit knowledge of Object Oriented Programming and Data
                  Structures and Algorithm. Also idea of database management
                  system. Made project by using Mongodb and MySQL.
                </p>
                <a
                  style={{ textDecoration: "none" }}
                  className="btn-1 outer-shadow hover-in-shadow me-3 mb-3"
                  href={
                    "https://drive.google.com/u/0/uc?id=13ISob0W9dDRVSax7bJU_5vqrlawZ4cI_&export=download"
                  }
                  download="Shajibul_Alam_Resume.pdf"
                >
                  Download Resume <FaDownload />
                </a>
                <a
                  href="#contact"
                  className="btn-1 outer-shadow hover-in-shadow"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
