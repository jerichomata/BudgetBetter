import React from "react";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import bbLogo from "../../assets/bbLogo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        {/* Name and info */}
        <div className="budget-better-footer-info-container">
          <div className="footer-logo-name-container">
            <img src={bbLogo} alt="bb Logo" />
            <h4>BudgetBetter</h4>
          </div>
          <div className="footer-info">
            <p>
              A bank account visualizer that helps you track your spending and
              budget better.
            </p>
          </div>
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
              href="https://www.linkedin.com/in/alex-zelinsky-2505ba203/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/AZensky"
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
              href="https://www.linkedin.com/in/kwan-tien-ooi/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Justynooi"
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
              href="https://www.linkedin.com/in/jerichomata/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/jerichomata"
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
