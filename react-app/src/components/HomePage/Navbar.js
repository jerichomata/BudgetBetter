import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import bbLogo from "../../assets/bbLogo.png";
import "./Navbar.css";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const loginDemoUser = async (e) => {
    e.preventDefault();
    await dispatch(login("Demo", "password"));
    history.push("/dashboard");
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={bbLogo} alt="bb Logo" />
        <span>BudgetBetter</span>
      </div>
      <div className="session-links">
        <button onClick={loginDemoUser}>Demo</button>
        <LoginFormModal />
        <SignupFormModal />
      </div>
    </div>
  );
}

export default Navbar;
