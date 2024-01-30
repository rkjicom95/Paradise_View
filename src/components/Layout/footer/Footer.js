import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-footer">
        <div className="main-footer">
          <div>
            <h4>Paradise view</h4>
            <p>
              The service at the Hotel Monteleone was exceptional. There was
              absolutely no issue that was not addressed timely and with
              satisfactory results. We were particulary impressed with how the
              hotel staff anticipated our needs (periodically coming by the
              Board Room to check with us)
            </p>
          </div>
          <div>
            <h4>Quick links</h4>
            <h6>Room booking</h6>
            <h6>Rooms</h6>
            <h6>Contact</h6>
            <h6>Explore</h6>
          </div>
          <div>
            <h4>Company</h4>
            <h6>Privacy policy</h6>
            <h6>Refund policy</h6>
            <h6>F.A.Q</h6>
            <h6>About</h6>
          </div>
          <div>
            <h4>Social media</h4>
            <Link
              to="https://www.facebook.com/home.php"
              className="footer-text-icon"
            >
              <h6 style={{ cursor: "pointer" }}>Facebook</h6>
              <SiFacebook size={20} className="facebook-icon footer-mt-icon" />
            </Link>
            <Link to="/" className="footer-text-icon">
              <h6>Twitter</h6>
              <FaTwitter size={20} className="twitter-icon footer-mt-icon" />
            </Link>
            <Link
              to="https://www.instagram.com/iamcoder95/"
              className="footer-text-icon"
            >
              <h6>Instagram</h6>
              <FaInstagram
                size={20}
                className="instagram-icon footer-mt-icon"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/rohit-kumar-prajapati-ba8868239/"
              className="footer-text-icon"
            >
              <h6>Linkedin</h6>
              <FaLinkedin size={20} className="linkedin-icon footer-mt-icon" />
            </Link>
          </div>
          <div className="footer-news">
            <div className="footer-news-text">
              <h4>Newsletter</h4>
              <h6>
                Kindly subscribe to our newsletter to get latest deals on our
                rooms and vacation discount.
              </h6>
            </div>
            <div className="footer-input-btn">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="header-line" />
        <h5 className="footer-view">Paradise view 2024</h5>
      </div>
    </>
  );
};

export default Footer;
