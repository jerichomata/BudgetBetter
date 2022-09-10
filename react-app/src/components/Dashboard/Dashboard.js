import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactions } from "../../store/transactions";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import TrendingDownSharpIcon from "@mui/icons-material/TrendingDownSharp";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import bbLogo from "../../assets/bbLogo.png";
import "./Dashboard.css";

function Dashboard() {
  const user = useSelector((state) => state.session.user);
  const transactions = useSelector((state) =>
    Object.values(state.transactions)
  );

  let income = 0;
  let expenses = 0;

  if (transactions?.length > 0) {
    for (let transaction of transactions) {
      if (transaction?.amount >= 0) {
        income += transaction?.amount;
      } else {
        expenses += transaction?.amount;
      }
    }
  }

  const dispatch = useDispatch();

  useEffect(() => {
    const initializePage = async () => {
      await dispatch(loadTransactions(user.id));
    };

    initializePage();
  }, []);
  return (
    <div className="dashboard-container">
      <div className="container">
        <aside>
          <div className="top">
            <div className="logo">
              <img src={bbLogo} alt="logo" />
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
              <h1 className="tab-title">Dashboard</h1>

              <div className="insights">
                <div className="balance">
                  <span>
                    <MonetizationOnSharpIcon />
                  </span>
                  <div className="middle">
                    <h3>Account Balance</h3>
                    <h1 id="account-balance-num">
                      {user?.accountBalance.toFixed(2)}
                    </h1>
                    <small className="text-muted">Current</small>
                  </div>
                </div>

                <div className="credit">
                  <span>
                    <TrendingUpSharpIcon />
                  </span>
                  <div className="middle">
                    <h3>Income</h3>
                    <h1 id="available-credit">+${income.toFixed(2)}</h1>
                    <small className="text-muted">All Time</small>
                  </div>
                </div>

                <div className="expenses">
                  <span>
                    <TrendingDownSharpIcon />
                  </span>
                  <div className="middle">
                    <h3>Expenses</h3>
                    <h1 id="account-expenses">
                      -${Math.abs(expenses.toFixed(2))}
                    </h1>
                    <small className="text-muted">All Time</small>
                  </div>
                </div>
              </div>

              <div className="visuals">
                <h2>Visual Analytics</h2>
                <div className="carousel">
                  <canvas className="carousel__item"></canvas>
                  <canvas
                    className="carousel__item"
                    style={{ display: "none" }}
                  ></canvas>
                  <canvas
                    className="carousel__item"
                    style={{ display: "none" }}
                  ></canvas>
                  <span>
                    <ArrowBackSharpIcon />
                  </span>
                  <span>
                    <ArrowForwardSharpIcon />
                  </span>
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

export default Dashboard;
