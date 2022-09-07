import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadGoals,
  removeGoal,
  checkGoal,
  removeComplete,
} from "../../store/goals";
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
                  <h1 className="tab-title">Goals</h1>
                  <h4 className="recent-news">Your Goals</h4>
                  <AddGoalModal />
                  {goals &&
                    goals?.length > 0 &&
                    goals.map((goal) => (
                      <div className="news-article-container">
                        <div className="news-article">
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
                          <div className="news-article-info">
                            <p className="news-article-title">{goal.name}</p>
                          </div>
                          <p>{goal.date}</p>
                          <EditGoalModal goalId={goal.id} />
                          <i
                            className="fa-regular fa-trash-can"
                            onClick={() => handleDelete(goal.id)}
                          ></i>
                        </div>
                        <hr className="separation-line" />
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

export default Goals;
