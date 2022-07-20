/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../../styles/Blogs.module.css";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineDownCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const data = [
  {
    id: "1",
    title: "Title of the blog will be shown here",
    subTitle: "category.",
    time: "time of public",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis doloribus? Dolorem optio officia facere error ipsam incidunt fuga quo doloribus minus minima excepturi quasi quos adipisci dignissimos sint ullam harum",
  },
  {
    id: "2",
    title: "Title of the blog will be shown here",
    subTitle: "category.",
    time: "time of public",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis doloribus? Dolorem optio officia facere error ipsam incidunt fuga quo doloribus minus minima excepturi quasi quos adipisci dignissimos sint ullam harum",
  },
  {
    id: "3",
    title: "Title of the blog will be shown here",
    subTitle: "category.",
    time: "time of public",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis doloribus? Dolorem optio officia facere error ipsam incidunt fuga quo doloribus minus minima excepturi quasi quos adipisci dignissimos sint ullam harum",
  },
  {
    id: "4",
    title: "Title of the blog will be shown here",
    subTitle: "category.",
    time: "time of public",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis doloribus? Dolorem optio officia facere error ipsam incidunt fuga quo doloribus minus minima excepturi quasi quos adipisci dignissimos sint ullam harum",
  },
  {
    id: "5",
    title: "Title of the blog will be shown here",
    subTitle: "category.",
    time: "time of public",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis doloribus? Dolorem optio officia facere error ipsam incidunt fuga quo doloribus minus minima excepturi quasi quos adipisci dignissimos sint ullam harum",
  },
  {
    id: "6",
    title: "Title of the blog will be shown here",
    subTitle: "category.",
    time: "time of public",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis doloribus? Dolorem optio officia facere error ipsam incidunt fuga quo doloribus minus minima excepturi quasi quos adipisci dignissimos sint ullam harum",
  },
];

const Blogs = () => {
  let ops1, ops2;
  useEffect(() => {
    ops1 = document.querySelector("#button-drop");
    ops2 = document.querySelector("#drop-description");
  }, []);
  return (
    <div id="blogs" className="pb-5 mb-5">
      <div className={`${styles["blogs-title"]} pt-5 mt-5 pb-5 mb-5`}>
        <div className={`${styles["content"]}`}>
          <h2>My_Blogs</h2>
          <h2>My_Blogs</h2>
          {/* <h2>My Blogs</h2> */}
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-2 g-lg-3">
          {data.map((singleBlog) => (
            <div key={singleBlog.id} className="col">
              <div className="c-cards">
                <div className="_cards">
                  <div className="_cards">
                    <div className="cards__banner">
                      <div className="background">
                        <div className="c-background">
                          <div className="cards__poster">
                            <img
                              className="img-fluid"
                              src="https://awesomescreenshot.s3.amazonaws.com/image/2708050/30309143-dc300a3e830caf32197e09bbb1b71116.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220719%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220719T052544Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=f6c566d4fe9c7845a150591e8e4d0bc4d13e61433d81bf2c2ca46c179bf2215e"
                              alt=""
                            />
                          </div>
                          <div className="cards__banner__content">
                            <div className="__content">
                              <h3 className="__content--title">
                                Title of the blog will be shown here
                              </h3>
                              <p className="__content--subtitle">
                                category. time of public
                              </p>
                              <button className="__content--btn">Visit</button>
                              <div className="__content--widgets">
                                <div className="social-links">
                                  <a
                                    className="outer-shadow hover-in-shadow"
                                    // target="_blank"
                                    href="https://www.linkedin.com/in/md-shajibul-alam-shihab-b96576216/"
                                  >
                                    <BsLinkedin />
                                  </a>
                                  <a
                                    className="outer-shadow hover-in-shadow"
                                    href="/"
                                  >
                                    <FaInstagram />
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
                          </div>
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="https://awesomescreenshot.s3.amazonaws.com/image/2708050/30309143-dc300a3e830caf32197e09bbb1b71116.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220719%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220719T052544Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=f6c566d4fe9c7845a150591e8e4d0bc4d13e61433d81bf2c2ca46c179bf2215e"
                        alt=""
                      />
                      <div className="drop">
                        <AiOutlineDownCircle
                          className="button_drop"
                          id={`button-drop${singleBlog.id}`}
                          onClick={() => {
                            document
                              .querySelector(`#button-drop${singleBlog.id}`)
                              .classList.toggle("drop-rotate");
                            document
                              .querySelector(
                                `#drop-description${singleBlog.id}`
                              )
                              .classList.toggle("drop-active");
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="cards__description"
                      id={`drop-description${singleBlog.id}`}
                    >
                      <div className="c-cards__description">
                        <div className="cards__description__text">
                          <h1>Summary</h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae, blanditiis doloribus? Dolorem
                            optio officia facere error ipsam incidunt fuga quo
                            doloribus minus minima excepturi quasi quos adipisci
                            dignissimos sint ullam harum
                          </p>
                        </div>
                        <div className="cards__description__img">
                          <div className="person">
                            <img
                              src="https://lh3.googleusercontent.com/a-/AFdZucrXlItCN8Z6Fpx-sAlYJuTa035GIua-dvFA6Y9kgg"
                              alt=""
                            />
                          </div>
                          <div className="person">
                            <img
                              src="https://lh3.googleusercontent.com/a-/AFdZucrXlItCN8Z6Fpx-sAlYJuTa035GIua-dvFA6Y9kgg"
                              alt=""
                            />
                          </div>
                          <div className="person">
                            <img
                              src="https://lh3.googleusercontent.com/a-/AFdZucrXlItCN8Z6Fpx-sAlYJuTa035GIua-dvFA6Y9kgg"
                              alt=""
                            />
                          </div>
                          <div className="person">
                            <img
                              src="https://lh3.googleusercontent.com/a-/AFdZucrXlItCN8Z6Fpx-sAlYJuTa035GIua-dvFA6Y9kgg"
                              alt=""
                            />
                          </div>
                          <div className="person">
                            <img
                              src="https://lh3.googleusercontent.com/a-/AFdZucrXlItCN8Z6Fpx-sAlYJuTa035GIua-dvFA6Y9kgg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.blogs_blur} blur`}></div>
      </div>
    </div>
  );
};

export default Blogs;
