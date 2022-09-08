import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadGoals,
  removeGoal,
  checkGoal,
  removeComplete,
} from "../../store/goals";
import { gmtToDate } from "../../util/date";
import DashboardLeft from "../Dashboard/DashboardLeft";
import DashboardRight from "../Dashboard/DashboardRight";
import AddGoalModal from "../AddGoalModal/AddGoalModal";
import EditGoalModal from "../EditGoalModal/EditGoalModal";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import "./Goals.css";

function Goals() {
  const user = useSelector((state) => state.session.user);
  const goals = useSelector((state) =>
    state.goals ? Object.values(state.goals) : null
  );

  const dispatch = useDispatch();

  const [numToShow, setNumToShow] = useState(3);

  const goalsToShow = goals?.slice(0, numToShow);

  useEffect(() => {
    const initializePage = async () => {
      await dispatch(loadGoals(user.id));
    };

    initializePage();
  }, [dispatch]);

  async function handleDelete(goalId) {
    await dispatch(removeGoal(user.id, goalId));
  }

  async function handleCheck(goalId) {
    await dispatch(checkGoal(goalId));
  }

  async function handleUncheck(goalId) {
    await dispatch(removeComplete(goalId));
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
                <div className="news-tab" id="goals-content-container">
                  <h1 className="tab-title">Goals</h1>
                  <div className="add-goal-modal-container">
                    <h4>Your Goals</h4>
                    <AddGoalModal />
                  </div>
                  {goalsToShow?.length > 0 &&
                    goalsToShow.map((goal) => (
                      <div className="news-article-container">
                        <div className="news-article" id="default-cursor">
                          <div className="goal-title-complete-container">
                            <i
                              className={`fa-solid fa-circle-check ${
                                goal.completed && "completed-goal"
                              }`}
                              onClick={
                                goal.completed
                                  ? () => handleUncheck(goal.id)
                                  : () => handleCheck(goal.id)
                              }
                            ></i>
                            <div
                              className="news-article-info"
                              id="goal-title-container"
                            >
                              <p className="news-article-title">{goal.name}</p>
                            </div>
                          </div>
                          <div id="goal-date-edit-container">
                            <p id="goal-date">{gmtToDate(goal.date)}</p>
                            <EditGoalModal goalId={goal.id} />
                            <i
                              className="fa-regular fa-trash-can"
                              id="delete-goal-btn"
                              onClick={() => handleDelete(goal.id)}
                            ></i>
                          </div>
                        </div>
                      </div>
                    ))}
                  {numToShow < goals.length && (
                    <button id="expense-load-more" onClick={loadMore}>
                      Load More
                    </button>
                  )}
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

export default Goals;
