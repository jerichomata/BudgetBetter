import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadReminders, removeReminder } from "../../store/reminders";
import DashboardLeft from "../Dashboard/DashboardLeft";
import DashboardRight from "../Dashboard/DashboardRight";
import AddReminderModal from "../AddReminderModal/AddReminderModal";
import EditReminderModal from "../EditReminderModal/EditReminderModal";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import "./Reminders.css";

function Reminders() {
  const user = useSelector((state) => state.session.user);
  const reminders = useSelector((state) =>
    state.reminders ? Object.values(state.reminders) : null
  );

  const [numToShow, setNumToShow] = useState(3);

  const remindersToShow = reminders?.slice(0, numToShow);

  const dispatch = useDispatch();

  useEffect(() => {
    const initializePage = async () => {
      await dispatch(loadReminders(user.id));
    };

    initializePage();
  }, [dispatch]);

  async function handleDelete(reminderId) {
    await dispatch(removeReminder(user.id, reminderId));
  }

  function loadMore() {
    setNumToShow((prevNum) => prevNum + 3);
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
                <div className="notifications-tab">
                  <h1 className="tab-title">Reminders</h1>
                  <div className="add-goal-modal-container">
                    <h4>Inbox</h4>
                    <AddReminderModal />
                  </div>
                  <div className="reminders-container">
                    {remindersToShow.length > 0 &&
                      remindersToShow.map((reminder) => (
                        <div className="message-container">
                          <div className="inbox-message">
                            <div className="msg-info">
                              <p className="msg-title">{reminder.title}</p>
                              <div>
                                <p className="msg-description">
                                  {reminder.description}
                                </p>
                                <p
                                  className="msg-description"
                                  id="reminder-date-view"
                                >
                                  {reminder.date}
                                </p>
                              </div>
                            </div>
                            <div className="edit-delete-reminder-container">
                              <EditReminderModal reminderId={reminder.id} />
                              <i
                                className="fa-regular fa-trash-can"
                                id="delete-goal-btn"
                                onClick={() => handleDelete(reminder.id)}
                              ></i>
                            </div>
                          </div>
                        </div>
                      ))}
                    {numToShow < reminders.length && (
                      <button id="expense-load-more" onClick={loadMore}>
                        Load More
                      </button>
                    )}
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

export default Reminders;
