import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import ReceiptLongSharpIcon from "@mui/icons-material/ReceiptLongSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import NewspaperSharpIcon from "@mui/icons-material/NewspaperSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import "./DashboardLeft.css";

function DashboardLeft() {
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleLogout() {
    await dispatch(logout());
    history.push("/");
  }

  return (
    <div className="sidebar">
      <NavLink to="/dashboard">
        <GridViewSharpIcon />
        <h3>Dashboard</h3>
      </NavLink>

      <NavLink to="/expenses">
        <ReceiptLongSharpIcon />
        <h3>Expenses</h3>
      </NavLink>

      <NavLink to="/notifications">
        <MailOutlineSharpIcon />
        <h3>Reminders</h3>
      </NavLink>

      <NavLink to="/news">
        <NewspaperSharpIcon />
        <h3>Goals</h3>
      </NavLink>

      {/* <NavLink to="/settings">
        <SettingsSharpIcon />
        <h3>Settings</h3>
      </NavLink> */}

      <div className="logout-btn" onClick={handleLogout}>
        <LogoutSharpIcon />
        <h3>Logout</h3>
      </div>
    </div>
  );
}

export default DashboardLeft;
