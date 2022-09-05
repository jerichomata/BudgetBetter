import React from "react";
import backgroundImage from "../../assets/bb2.jpg";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div
      className="landing-page-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "top",
        backgroundSize: "600px 600px",
      }}
    >
      <div className="landing-page">
        <div class="landing-page-center-container">
          <div class="form-container">
            <h1 class="budget-better-title">BudgetBetter</h1>
            <div class="form__input-group">
              <button type="button" class="form__button" id="link-account">
                Demo
              </button>
            </div>
          </div>

          <div class="overlay">
            <div class="overlay-panel">
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
