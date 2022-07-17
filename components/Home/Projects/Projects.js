/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../../styles/Projects.module.css";
import { FaTwitter } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  return (
    <div>
      <div className="container">
        <h1 className="stroke-text text-center">
          {"<"} Projects {"/>"}
        </h1>
        <div>
          <div>
            <section className="hero-section">
              <div className="cards-grid">
                <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">Example Card Heading</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://www.linkedin.com/in/md-shajibul-alam-shihab-b96576216/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/shihab-2021"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">Example Card Heading</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://www.linkedin.com/in/md-shajibul-alam-shihab-b96576216/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/shihab-2021"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">Example Card Heading</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://www.linkedin.com/in/md-shajibul-alam-shihab-b96576216/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/shihab-2021"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">Example Card Heading</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://www.linkedin.com/in/md-shajibul-alam-shihab-b96576216/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/shihab-2021"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
