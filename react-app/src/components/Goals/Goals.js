import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadGoals } from "../../store/goals";
import DashboardLeft from "../Dashboard/DashboardLeft";
import DashboardRight from "../Dashboard/DashboardRight";
import AddGoalModal from "../AddGoalModal/AddGoalModal";
import EditGoalModal from "../EditGoalModal/EditGoalModal";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";

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

  return (
    <div className="dashboard-container">
      <div className="container">
        <aside>
          <div class="top">
            <div class="logo">
              <AccountBalanceSharpIcon />

              <h2>BudgetBetter</h2>
            </div>
            <div class="close" id="close-btn">
              <span class="material-icons-sharp"> close </span>
            </div>
          </div>

          <DashboardLeft />
        </aside>

        <main>
          <div class="tab">
            <div class="news-tab">
              <div class="tab">
                <div class="news-tab">
                  <h1 class="tab-title">Goals</h1>
                  <h4 class="recent-news">Your Goals</h4>
                  <AddGoalModal />
                  {goals &&
                    goals?.length > 0 &&
                    goals.map((goal) => (
                      <div class="news-article-container">
                        <div class="news-article">
                          <div class="news-article-info">
                            <p class="news-article-title">{goal.name}</p>
                          </div>
                          <p>{goal.date}</p>
                          <EditGoalModal goalId={goal.id} />
                        </div>
                        <hr class="separation-line" />
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
