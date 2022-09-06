import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactions } from "../../store/transactions";
import DashboardLeft from "../Dashboard/DashboardLeft";
import DashboardRight from "../Dashboard/DashboardRight";
import AddTransactionFormModal from "../AddTransactionModal/AddTransactionFormModal";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import CreditCardSharpIcon from "@mui/icons-material/CreditCardSharp";
import TrendingDownSharpIcon from "@mui/icons-material/TrendingDownSharp";

function ExpenseTracker() {
  const user = useSelector((state) => state.session.user);
  const transactions = useSelector((state) => state.transactions);
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
                  <h1 className="tab-title">Expense Tracker</h1>
                  <div className="expense-container">
                    <h4>Your Balance</h4>
                    <h1 id="balance-expense">$1500</h1>
                    <div className="inc-exp-container">
                      <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">
                          +$5500
                        </p>
                      </div>
                      <div>
                        <h4>Expenses</h4>
                        <p id="money-minus" className="money minus">
                          -$2124
                        </p>
                      </div>
                    </div>
                    <h3>History</h3>
                    <div className="recent-orders">
                      <h2>Recent Transactions</h2>
                      <AddTransactionFormModal />
                      <table className="recent-transaction-table">
                        <thead>
                          <tr>
                            <th>Transaction Origin</th>
                            <th>Date</th>
                            <th>Payment Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody id="table-body"></tbody>
                      </table>
                      <a href="#">Show All</a>
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

export default ExpenseTracker;
