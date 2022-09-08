import React from "react";
import { useSelector } from "react-redux";
import DashboardLeft from "../Dashboard/DashboardLeft";
import DashboardRight from "../Dashboard/DashboardRight";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";

function Settings() {
  const user = useSelector((state) => state.session.user);
  return (
    <div className="dashboard-container">
      <div className="container">
        <aside>
          <div className="top">
            <div className="logo">
              <AccountBalanceSharpIcon />

              <h2>BudgetBetter</h2>
            </div>
            <div className="close" id="close-btn">
              <span className="material-icons-sharp"> close </span>
            </div>
          </div>

          <DashboardLeft />
        </aside>

        <main>
          <div className="tab">
            <div className="news-tab">
              <div className="tab">
                <div className="news-tab">
                  <h1 className="tab-title">Settings</h1>
                  <div className="settings">
                    <div className="profile-info">
                      <h2 className="account-info-title">
                        Account Information
                      </h2>
                      <div className="profile-section-box">
                        <div className="account-info-container">
                          <h5 className="account-info">
                            Username: {user?.username}
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div className="color_mode">
                      <div className="theme-toggler">
                        <h2>Theme Toggler</h2>
                        <div className="themes">
                          <span>
                            <LightModeSharpIcon />
                          </span>
                          <span>
                            <DarkModeSharpIcon />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <DashboardRight />
      </div>
    </div>
  );
}

export default Settings;
