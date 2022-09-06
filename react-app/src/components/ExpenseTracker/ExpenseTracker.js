import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactions } from "../../store/transactions";
import DashboardLeft from "../Dashboard/DashboardLeft";
import DashboardRight from "../Dashboard/DashboardRight";
import AddTransactionFormModal from "../AddTransactionModal/AddTransactionFormModal";
import EditTransactionModal from "../EditTransactionModal/EditTransactionModal";
import { removeTransaction } from "../../store/transactions";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";

function ExpenseTracker() {
  const user = useSelector((state) => state.session.user);
  const transactions = useSelector((state) =>
    state.transactions ? Object.values(state.transactions) : null
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

  async function handleDelete(transactionId) {
    await dispatch(removeTransaction(user.id, transactionId));
  }

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
                    <h1 id="balance-expense">
                      ${user ? user.accountBalance : 0.0}
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
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody id="table-body">
                          {transactions &&
                            transactions.length > 0 &&
                            transactions.map((transaction) => (
                              <tr key={transaction?.id}>
                                <td>{transaction?.title}</td>
                                <td>{transaction?.date}</td>
                                <td>${transaction?.amount}</td>
                                <td>
                                  <EditTransactionModal
                                    transactionId={transaction?.id}
                                  />
                                </td>
                                <td>
                                  <i
                                    class="fa-regular fa-trash-can"
                                    onClick={() =>
                                      handleDelete(transaction?.id)
                                    }
                                  ></i>
                                </td>
                              </tr>
                            ))}
                        </tbody>
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
