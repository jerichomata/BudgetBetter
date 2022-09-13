import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactions } from "../../store/transactions";
import { gmtToDate } from "../../util/date";
import DashboardLeft from "../Dashboard/DashboardLeft";
import DashboardRight from "../Dashboard/DashboardRight";
import AddTransactionFormModal from "../AddTransactionModal/AddTransactionFormModal";
import EditTransactionModal from "../EditTransactionModal/EditTransactionModal";
import { removeTransaction } from "../../store/transactions";
import bbLogo from "../../assets/bbLogo.png";
import "./ExpenseTracker.css";

function ExpenseTracker() {
  const user = useSelector((state) => state.session.user);
  const transactions = useSelector((state) =>
    state.transactions ? Object.values(state.transactions) : null
  );

  const [numToShow, setNumToShow] = useState(5);

  transactions.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  let transactionsToShow = transactions.slice(0, numToShow);

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

  async function handleDelete(transactionId, amount) {
    await dispatch(removeTransaction(user.id, transactionId, amount));
  }

  function loadMore() {
    setNumToShow((prevNum) => prevNum + 5);
  }

  return (
    <div className="dashboard-container">
      <div className="container">
        <aside>
          <div className="top">
            <div className="logo">
              <img src={bbLogo} alt="logo" />
              <h2 className="dashboard-bb-title">
                Budget<span>Better</span>
              </h2>
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
                    <h1 id="balance-expense">
                      ${user ? user.accountBalance.toFixed(2) : 0.0}
                    </h1>
                    <div className="inc-exp-container">
                      <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">
                          +${income.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <h4>Expenses</h4>
                        <p id="money-minus" className="money minus">
                          -${Math.abs(expenses.toFixed(2))}
                        </p>
                      </div>
                    </div>
                    <h3></h3>
                    <div className="recent-orders">
                      <div className="recent-transactions-btn-container">
                        <h2 id="recent-transactions-header">
                          Recent Transactions
                        </h2>
                        <AddTransactionFormModal />
                      </div>
                      <table className="recent-transaction-table">
                        <thead>
                          <tr>
                            <th>Transaction Origin</th>
                            <th>Date</th>
                            <th>Payment Amount</th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody id="table-body">
                          {transactionsToShow.length > 0 &&
                            transactionsToShow.map((transaction) => (
                              <tr key={transaction?.id}>
                                <td>{transaction?.title}</td>
                                <td>
                                  {transaction?.date &&
                                    gmtToDate(transaction?.date)}
                                </td>
                                <td>${transaction?.amount}</td>
                                <td>
                                  <EditTransactionModal
                                    transactionId={transaction?.id}
                                  />
                                </td>
                                <td className="delete-transaction-btn-container">
                                  <i
                                    class="fa-regular fa-trash-can"
                                    onClick={() =>
                                      handleDelete(
                                        transaction?.id,
                                        transaction?.amount
                                      )
                                    }
                                  ></i>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                      {numToShow < transactions.length && (
                        <button id="expense-load-more" onClick={loadMore}>
                          Load More
                        </button>
                      )}
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
