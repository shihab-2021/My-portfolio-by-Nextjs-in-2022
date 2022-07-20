import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "../../../styles/Footer.module.css";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div className="pt-5 mt-5">
      <ScrollToTop
        smooth
        top="500"
        color="#ffffff"
        viewBox="0 0 330 330"
        svgPath="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606
        C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0
        c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80
        C261.465,190.251,261.465,199.749,255.606,205.606z"
        style={{
          borderRadius: "20px",
          // paddingLeft: "6px",
          backgroundColor: "#2bfde9",
          zIndex: "3",
          // backgroundColor: "#4f46e5",
        }}
      />
      <footer className={styles.footer}>
        <div className={`${styles.footer_blur1} blur`}></div>
        <div className={`${styles.footer_blur2} blur`}></div>
        <div className={styles.waves}>
          <div className={styles.wave} id={styles.wave1}></div>
          <div className={styles.wave} id={styles.wave2}></div>
          <div className={styles.wave} id={styles.wave3}></div>
          <div className={styles.wave} id={styles.wave4}></div>
        </div>
        <ul className={styles.social_icon}>
          <li>
            <a
              href="https://twitter.com/shihab_shajibul"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/md-shajibul-alam-shihab-b96576216/"
              rel="noreferrer"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shihab-2021"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/shajibul_alam_shihab/"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/shajibulalam.shihab/"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebook />
            </a>
          </li>
        </ul>
        <ul className={styles.menu}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p>
          <span className="logo">Shihab</span> © 2022 | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
