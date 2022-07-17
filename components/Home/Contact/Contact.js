import React from "react";

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
    <div>
      <section className="contact pb-5 mb-5" id="contact">
        <div className="container">
          <div>
            <h1 style={{ color: "#df4d68" }} className="heading pb-3">
              <span>Contact</span>
              <hr
                className="m-0 p-0 fw-bold"
                style={{ width: "50px", height: "3px" }}
              />
            </h1>
            <p></p>
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
                  <div className="address">
                    <h2>
                      <i className="fas fa-phone-alt border rounded-circle p-2 outer-shadow"></i>
                      Location:
                    </h2>
                    <p className="ps-5">Bangladesh</p>
                  </div>
                  <div className="email">
                    <h2>
                      <i className="fas fa-mail-bulk border rounded-circle p-2 outer-shadow"></i>{" "}
                      Email:
                    </h2>
                    <p className="ps-5">shihab77023@gmail.com</p>
                  </div>
                  <div className="phone">
                    <h2>
                      <i className="fas fa-phone-alt border rounded-circle p-2 outer-shadow"></i>{" "}
                      Phone:
                    </h2>
                    <p className="ps-5">01643433981</p>
                  </div>
                  {/* google map  */}
                  <iframe
                    title="google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746840.9140003617!2d88.1008004557478!3d23.49563313534055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1637629669088!5m2!1sen!2sbd"
                    frameBorder="0"
                    style={{ border: "0", width: "100%", height: "290px" }}
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
                      style={{ borderRadius: "30px" }}
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
