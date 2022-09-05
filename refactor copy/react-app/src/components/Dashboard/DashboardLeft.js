import React from "react";
import { NavLink } from "react-router-dom";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import ReceiptLongSharpIcon from "@mui/icons-material/ReceiptLongSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import NewspaperSharpIcon from "@mui/icons-material/NewspaperSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

function DashboardLeft() {
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
        <h3>Notifications</h3>
      </NavLink>
      <NavLink to="/news">
        <NewspaperSharpIcon />
        <h3>News</h3>
      </NavLink>

      <NavLink to="/settings">
        <SettingsSharpIcon />
        <h3>Settings</h3>
      </NavLink>

      <NavLink to="/">
        <LogoutSharpIcon />
        <h3>Logout</h3>
      </NavLink>
    </div>
  );
}

export default DashboardLeft;
