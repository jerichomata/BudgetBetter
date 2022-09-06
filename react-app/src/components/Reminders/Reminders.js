import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadReminders, removeReminder } from "../../store/reminders";
import DashboardLeft from "../Dashboard/DashboardLeft";
import DashboardRight from "../Dashboard/DashboardRight";
import AddReminderModal from "../AddReminderModal/AddReminderModal";
import EditReminderModal from "../EditReminderModal/EditReminderModal";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";

function Reminders() {
  const reminders = useSelector((state) => Object.values(state.reminders));
  const user = useSelector((state) => state.session.user);
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
                  <h4 className="inbox">Inbox</h4>
                  <AddReminderModal />
                  {reminders &&
                    reminders.length > 0 &&
                    reminders.map((reminder) => (
                      <div className="message-container">
                        <div className="inbox-message">
                          <div className="msg-info">
                            <p className="msg-title">{reminder.title}</p>
                            <p className="msg-description">
                              {reminder.description}
                            </p>
                            <p className="msg-description">{reminder.date}</p>
                          </div>
                          <EditReminderModal reminderId={reminder.id} />
                          <i
                            className="fa-regular fa-trash-can"
                            onClick={() => handleDelete(reminder.id)}
                          ></i>
                        </div>
                        <hr className="separation-line-inbox" />
                      </div>
                    ))}
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
