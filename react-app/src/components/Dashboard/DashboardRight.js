import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";
import { fetchMarketNews } from "../../util/news-api";
import { unixToDate } from "../../util/date";

function DashboardRight() {
  const transactions = useSelector((state) =>
    Object.values(state.transactions)
  );

  const [marketNews, setMarketNews] = useState([]);
  const [numToShow, setNumToShow] = useState(3);

  transactions.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  let transactionsToShow = transactions.slice(0, numToShow);

  useEffect(() => {
    const initializePage = async () => {
      const data = await fetchMarketNews();
      setMarketNews(data);
    };
    initializePage();
  }, []);

  function showMore() {
    setNumToShow((prevNum) => prevNum + 3);
  }

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
        {transactionsToShow.length > 0 &&
          transactionsToShow.map((transaction) => (
            <div className="item online">
              <div className="icon">
                <span>
                  <MonetizationOnSharpIcon />
                </span>
              </div>
              <div className="right">
                <div className="info">
                  <h3 id="first-recent-transaction">{transaction?.title}</h3>
                  <small className="text-muted">{transaction?.date}</small>
                </div>
                <h3 id="first-recent-amount">
                  {transaction?.amount >= 0
                    ? "+$" + transaction?.amount.toFixed(2)
                    : "-$" + Math.abs(transaction?.amount.toFixed(2))}
                </h3>
              </div>
            </div>
          ))}
        {numToShow < transactions.length && (
          <button className="load-more" onClick={showMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default DashboardRight;
