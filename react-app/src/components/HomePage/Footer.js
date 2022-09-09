import React from "react";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        {/* Name and info */}
        <div className="budget-better-footer-info-container">
          <div className="footer-logo-name-container">
            <h4>BudgetBetter</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            debitis, nesciunt quo deserunt eum quidem porro quas eveniet,
            impedit dignissimos quaerat vel culpa facilis vero?
          </p>
        </div>

        {/* Account */}
        <div className="footer-account-container">
          <h4>Account</h4>
          <LoginFormModal styleId="footer-login" />
          <SignupFormModal styleId="footer-login" />
        </div>

        {/* Contact */}
        <div className="footer-contact-container">
          <h4>Contact</h4>
          <div className="person-contact-info">
            <div className="person-name-container">
              <span>Alex Zelinsky</span>
            </div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="person-contact-info">
            <div className="person-name-container">
              <span>Justyn Ooi</span>
            </div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="person-contact-info">
            <div className="person-name-container">
              <span>Jericho Mata</span>
            </div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
