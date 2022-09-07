import React, { useEffect, useState } from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import FeedSharpIcon from "@mui/icons-material/FeedSharp";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";
import { fetchMarketNews } from "../../util/news-api";
import { unixToDate } from "../../util/date";

function DashboardRight() {
  const [marketNews, setMarketNews] = useState([]);

  useEffect(() => {
    const initializePage = async () => {
      const data = await fetchMarketNews();
      setMarketNews(data);
    };
    initializePage();
  }, []);

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
          {marketNews.length > 0 &&
            marketNews.map((news) => (
              <a
                key={news.id}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="update">
                  <div className="profile-photo">
                    <img src={news.image} alt="News cover" />
                  </div>
                  <div className="message">
                    <p>{news.headline}</p>
                    <small className="text-muted">
                      {unixToDate(news.datetime)}
                    </small>
                  </div>
                </div>
              </a>
            ))}
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
