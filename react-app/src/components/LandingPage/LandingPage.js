import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import backgroundImage from "../../assets/bb2.jpg";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "./LandingPage.css";

function LandingPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const loginDemoUser = async (e) => {
    e.preventDefault();
    await dispatch(login("Demo", "password"));
    history.push("/dashboard");
  };

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
        <div className="landing-page-center-container">
          <div className="form-container">
            <h1 className="budget-better-title">BudgetBetter</h1>
            <div className="landing-page-btn-container">
              <button
                type="button"
                className="form__button"
                id="link-account"
                onClick={loginDemoUser}
              >
                Demo
              </button>
              <div className="signup-login-btn-container">
                <LoginFormModal />
                <SignupFormModal />
              </div>
            </div>
          </div>

          <div className="overlay">
            <div className="overlay-panel">
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
