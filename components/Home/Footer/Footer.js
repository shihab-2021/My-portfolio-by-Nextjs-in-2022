import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "../../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className="pt-5 mt-5">
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
