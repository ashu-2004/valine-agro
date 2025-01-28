import React from "react";
import style from "./Contact.module.css";

function Contact() {
  return (
    <div className="container">
      <div className={style["content"]}>
        <div className="col-12 col-md-6">
          <div className={`card ${style.card}`}>
            <div className="card-header bg-primary text-white">
              <i className="fa fa-envelope"></i> Contact Us
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="6"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <div className={`card bg-light mb-3 ${style.card}`}>
            <div className="card-header bg-success text-white text-uppercase">
              <i className="fa fa-home"></i> Address
            </div>
            <div className="card-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119980.18685473979!2d73.59774379726564!3d19.992524699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb7e65207dad%3A0xe8fe6a9ac94892b5!2sMIDC%20OFFICE%20NASHIK!5e0!3m2!1sen!2sin!4v1737883461954!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
