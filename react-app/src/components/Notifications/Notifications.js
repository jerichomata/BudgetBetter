import React from "react";
import DashboardLeft from "../Dashboard/DashboardLeft";
import DashboardRight from "../Dashboard/DashboardRight";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";

function Notifications() {
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
                <div className="notifications-tab">
                  <h1 className="tab-title">Notifications</h1>
                  <h4 className="inbox">Inbox</h4>
                  <div className="message-container">
                    <div className="inbox-message">
                      <div className="msg-info">
                        <p className="msg-title">BudgetBetter</p>
                        <p className="msg-description">
                          You spend $486 more than you deposit. Here are some
                          financial management tips.
                        </p>
                      </div>
                      <span className="material-icons-sharp">open_in_new</span>
                    </div>
                    <hr className="separation-line-inbox" />
                  </div>
                  <div className="message-container">
                    <div className="inbox-message">
                      <div className="msg-info">
                        <p className="msg-title">Bank of America</p>
                        <p className="msg-description">
                          You have gone over your credit limit by $312.64. Your
                          mortgage is on the line.
                        </p>
                      </div>
                      <span className="material-icons-sharp">open_in_new</span>
                    </div>
                    <hr className="separation-line-inbox" />
                  </div>
                  <div className="message-container">
                    <div className="inbox-message">
                      <div className="msg-info">
                        <p className="msg-title">
                          University of California, Davis
                        </p>
                        <p className="msg-description">
                          Your student loan payment is due tomorrow. Education
                          is expensive, pay up!
                        </p>
                      </div>
                      <span className="material-icons-sharp">open_in_new</span>
                    </div>
                    <hr className="separation-line-inbox" />
                  </div>
                  <div className="message-container">
                    <div className="inbox-message">
                      <div className="msg-info">
                        <p className="msg-title">BudgetBetter</p>
                        <p className="msg-description">
                          Welcome to BudgetBetter! Open me to learn more.
                        </p>
                      </div>
                      <span className="material-icons-sharp">open_in_new</span>
                    </div>
                    <hr className="separation-line-inbox" />
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

export default Notifications;
