import React from "react";
import {
  FaFacebookF,
  FaGem,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import style from "./Footer.module.css";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <section className="p-4">
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f">
                <FaFacebookF></FaFacebookF>
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter">
                <FaTwitter />
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google">
                <FaGoogle />
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram">
                <FaInstagram />
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin">
                <FaLinkedin />
              </i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">
                    <FaGem />
                  </i>
                  Company
                </h6>
                <p>
                  <h5>Valine Agro Industries</h5>
                  Agro-based industries are those that depend on agricultural
                  products as their main raw materials. These industries take
                  the output of farms and transform it into products such as
                  food, textiles, biofuels, and other value-added goods.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a
                    href="#!"
                    className={`${style["text-reset"]} ${style["underline"]}`}
                  >
                    Hydro-S
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className={`${style["text-reset"]} ${style["underline"]}`}
                  >
                    Leksa
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className={`${style["text-reset"]} ${style["underline"]}`}
                  >
                    Fruit Drip
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className={`${style["text-reset"]} ${style["underline"]}`}
                  >
                    Niwon
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a
                    href="#!"
                    className={`${style["text-reset"]} ${style["underline"]}`}
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className={`${style["text-reset"]} ${style["underline"]}`}
                  >
                    About
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className={`${style["text-reset"]} ${style["underline"]}`}
                  >
                    Gallery
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className={`${style["text-reset"]} ${style["underline"]}`}
                  >
                    Contact Us
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3">
                    <IoHome />
                  </i>
                  Plot No.Gn 122/Shop No.5 <br></br>
                  Office Janori MIDC,Dist: Nashik, Maharashtra
                </p>
                <p>
                  <i className="fas fa-envelope me-3">
                    <MdEmail />
                  </i>
                  valinagroind@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3">
                    <FaPhoneAlt />
                  </i>{" "}
                  8010832395
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}
        >
          2025 Voline Agro Industries. All rights reserved.
        </div>
      </footer>
    </section>
  );
}

export default Footer;
