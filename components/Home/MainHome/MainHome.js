import React from "react";
import Header from "../Header/Header";
import styles from "../../../styles/particles.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const MainHome = () => {
  return (
    <div className="bg">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default MainHome;
