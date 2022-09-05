import React from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import FeedSharpIcon from "@mui/icons-material/FeedSharp";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";

function DashboardRight() {
  return (
    <div className="right">
      <div className="top">
        <button id="menu-btn">
          <span>
            <MenuSharpIcon />
          </span>
        </button>
        <div className="theme-toggler"></div>
        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Name</b>
            </p>
          </div>
        </div>
      </div>

      <div className="recent-updates">
        <h2>Recent News</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              <span>
                <FeedSharpIcon />
              </span>
            </div>
            <div className="message">
              <p>
                <b>Elon Musk</b> says invest in Dogecoin! You do not want to
                miss out!{" "}
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <span>
                <FeedSharpIcon />
              </span>
            </div>
            <div className="message">
              <p>
                <b>Bill Gates</b> says buying microsoft products over apple
                products will save you money!
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update last-update">
            <div className="profile-photo">
              <span>
                <FeedSharpIcon />
              </span>
            </div>
            <div className="message">
              <p>
                <b>Warren Buffet</b> just invested $2 million into Coca-Cola.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
        </div>
      </div>

      <div className="sales-analytics">
        <h2>Recent Transactions</h2>
        <div className="item online">
          <div className="icon">
            <span>
              <MonetizationOnSharpIcon />
            </span>
          </div>
          <div className="right">
            <div className="info">
              <h3 id="first-recent-transaction">N/A</h3>
              <small className="text-muted">24 Hours Ago</small>
            </div>
            <h3 id="first-recent-amount">N/A</h3>
          </div>
        </div>
        <div className="item offline">
          <div className="icon">
            <span>
              <SouthSharpIcon />
            </span>
          </div>
          <div className="right">
            <div className="info">
              <h3 id="second-recent-transaction">N/A</h3>
              <small className="text-muted">24 Hours Ago</small>
            </div>
            <h3 id="second-recent-amount">N/A</h3>
          </div>
        </div>
        <div className="item customers">
          <div className="icon">
            <span>
              <MonetizationOnSharpIcon />
            </span>
          </div>
          <div className="right">
            <div className="info">
              <h3 id="third-recent-transaction">N/A</h3>
              <small className="text-muted">24 Hours Ago</small>
            </div>
            <h3 id="third-recent-amount">N/A</h3>
          </div>
        </div>
        <div className="item add-product">
          <div>
            <span className="material-icons-sharp">add</span>
            <h3 className="load-more">Load More</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRight;
