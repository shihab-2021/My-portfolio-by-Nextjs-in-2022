import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import styles from "../../../styles/particles.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";

const MainHome = () => {
  return (
    <div className="bg">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default MainHome;
