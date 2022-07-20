import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_tq7186l",
        e.target,
        "user_FIUbythhej2GDvNHeUcCs"
      )
      .then(
        (result) => {
          document.getElementById("status").style.pointerEvents = "all";
          document.getElementById("status").innerHTML =
            "Thank you for your message.";
          document.getElementById("status").classList.add("success");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          document.getElementById("status").classList.add("error");
          document.getElementById("status").innerHTML =
            "Oops! There was a problem.";
        }
      );
    e.target.reset();
  };
  return (
    <div className="pb-5 mb-5">
      <section className="contact pb-5 mb-5" id="contact">
        <div className="container">
          <div>
            <h1
              // style={{ color: "#df4d68" }}
              className="heading pb-3 text-center d-flex justify-content-center flex-column align-items-center stroke-text pt-5"
            >
              <span className="">CONTACT</span>
              <hr
                className="mb-5 p-0 fw-bold"
                style={{
                  width: "80px",
                  height: "3px",
                  border: "3px solid #00ffe7",
                  borderRadius: "30%",
                  marginTop: "-5px",
                }}
              />
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div
                className="p-4"
                style={{
                  borderRadius: "15px",
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,0.35)!important",
                }}
              >
                <div className="info">
                  <div
                    className="email d-flex p-3 align-items-center"
                    style={{
                      borderRadius: "5px",
                      boxShadow: "0 .5rem 1rem rgba(0,0,0,0.35)!important",
                    }}
                  >
                    <span
                      className="p-3 bg-dark d-flex"
                      style={{ borderRadius: "50%", overflow: "visible" }}
                    >
                      <AiOutlineMail />
                    </span>
                    <p className="m-0 ps-3">shihab77023@gmail.com</p>
                  </div>
                  <div className="email">
                    <p className="ps-5"></p>
                  </div>
                  <div
                    className="phone d-flex p-3 align-items-center"
                    style={{
                      borderRadius: "5px",
                      boxShadow: "0 .5rem 1rem rgba(0,0,0,0.35)!important",
                    }}
                  >
                    <span
                      className="p-3 bg-dark d-flex"
                      style={{ borderRadius: "50%", overflow: "visible" }}
                    >
                      <BsTelephone />
                    </span>
                    <p className="m-0 ps-3">016434339**</p>
                  </div>
                  <div
                    className="address d-flex p-3 align-items-center mb-3"
                    style={{
                      borderRadius: "5px",
                      boxShadow: "0 .5rem 1rem rgba(0,0,0,0.35)!important",
                    }}
                  >
                    <span
                      className="p-3 bg-dark d-flex"
                      style={{ borderRadius: "50%", overflow: "visible" }}
                    >
                      <HiOutlineLocationMarker />
                    </span>
                    <p className="m-0 ps-3">Chittagong, Bangladesh</p>
                  </div>
                  {/* google map  */}
                  <iframe
                    title="google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746840.9140003617!2d88.1008004557478!3d23.49563313534055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1637629669088!5m2!1sen!2sbd"
                    frameBorder="0"
                    style={{
                      border: "0",
                      width: "100%",
                      height: "290px",
                      borderRadius: "5px",
                      boxShadow: "0 .5rem 1rem rgba(0,0,0,0.35)!important",
                      opacity: "0.8",
                    }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/* contact form  */}
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch flex-column">
              <div
                className="p-4"
                style={{
                  borderRadius: "15px",
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,0.35)!important",
                }}
              >
                <form
                  className="row g-3 text-light"
                  action="https://formspree.io/f/xoqraljo"
                  method="POST"
                  id="my-form"
                  onSubmit={sendEmail}
                >
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      style={{
                        borderRadius: "30px",
                        background: "transparent",
                        color: "white",
                      }}
                      type="email"
                      className="form-control outer-shadow hover-in-shadow"
                      placeholder="Email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      style={{
                        borderRadius: "30px",
                        background: "transparent",
                        color: "white",
                      }}
                      type="text"
                      placeholder="Name"
                      className="form-control outer-shadow hover-in-shadow"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      style={{
                        borderRadius: "30px",
                        background: "transparent",
                        color: "white",
                      }}
                      type="text"
                      className="form-control outer-shadow hover-in-shadow"
                      id="subject"
                      placeholder="subject"
                      name="subject"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      style={{
                        borderRadius: "30px",
                        background: "transparent",
                        color: "white",
                      }}
                      type="text"
                      className="form-control outer-shadow hover-in-shadow"
                      id="message"
                      placeholder="Message"
                      rows="10"
                      name="message"
                    />
                  </div>

                  <div className="col-12">
                    <button
                      style={{
                        borderRadius: "30px",
                        background: "transparent",
                      }}
                      type="submit"
                      className="outer-shadow hover-in-shadow btn-1 border-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div id="status"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
