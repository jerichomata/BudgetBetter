import React from "react";
import backgroundImage from "../../assets/bb2.jpg";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div
      className="landing-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <h1 class="budget-better-title">BudgetBetter</h1>
          <div class="form__input-group">
            <button type="button" class="form__button" id="link-account">
              Get Started
            </button>
          </div>
          <div class="register-container">
            <div class="demo-container">
              <p class="demo-info">For Demo Purposes:</p>
              <p class="demo-info">Username: custom_two</p>
              <p class="demo-info">Password: pass_good</p>
              <p class="demo-info">Authentication: 1234</p>
            </div>
          </div>
        </div>

        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Keeping You Financially Stable</h1>
              <p>BudgetBetter is here to visualize your financial trends.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
