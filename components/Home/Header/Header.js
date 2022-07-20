import React from "react";
import styles from "../../../styles/particles.module.css";
import { useEffect } from "react";
import HeroSection from "../HeroSection/HeroSection";

const Header = () => {
  let head_container;
  useEffect(() => {
    head_container = document.querySelector(".head_container");
  }, []);
  return (
    <div id="home">
      <div className="blur hero-blur"></div>
      <div className="blur hero-blur1"></div>
      <div id="particle-container">
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
      <div className="head_container">
        <div className="head_navbar shadow-sm">
          <div className="menu">
            <h1 className="logo">Shihab</h1>
            <div
              className="hamburger-menu"
              onClick={() => head_container.classList.toggle("active")}
            >
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <HeroSection></HeroSection>
        <div className="links">
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => head_container.classList.toggle("active")}
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => head_container.classList.toggle("active")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => head_container.classList.toggle("active")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                onClick={() => head_container.classList.toggle("active")}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => head_container.classList.toggle("active")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
