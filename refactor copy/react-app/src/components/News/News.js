import React from "react";
import DashboardLeft from "../Dashboard/DashboardLeft";
import DashboardRight from "../Dashboard/DashboardRight";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";

function News() {
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
                  <h1 class="tab-title">News</h1>
                  <h4 class="recent-news">Recent News</h4>
                  <div class="news-article-container">
                    <div class="news-article">
                      <div class="news-article-info">
                        <p class="news-article-title">
                          Don Young, Alaska Congressman Who Was Dean of the
                          House, Dies at 88
                        </p>
                        <p class="news-article-description">
                          Mr. Young, who was first elected in 1973, during the
                          Nixon administration, became the longest-serving
                          Republican in House history in 2019.
                        </p>
                      </div>
                      <img
                        class="news-article-img"
                        src="https://static01.nyt.com/images/2022/03/18/multimedia/18-obit-young--alaska/merlin_141953070_83136434-7b70-47a1-bbf5-e88294b921a4-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
                        alt=""
                      />
                    </div>
                    <hr class="separation-line" />
                  </div>
                  <div class="news-article-container">
                    <div class="news-article">
                      <div class="news-article-info">
                        <p class="news-article-title">
                          Why the Federal Reserve raises interest rates to
                          combat inflation
                        </p>
                        <p class="news-article-description">
                          The central bank is likely to raise its target federal
                          funds rate by 25 basis points to address the worst
                          inflation in more than 40 years, partially brought on
                          by the coronavirus pandemic
                        </p>
                      </div>
                      <img
                        class="news-article-img"
                        src="https://image.cnbcfm.com/api/v1/image/107028789-1646954794683-gettyimages-1384030484-dscf3093_2022031053903605.jpeg?v=1646954840&w=600&h=300&vtcrop=y"
                        alt=""
                      />
                    </div>
                    <hr class="separation-line" />
                  </div>
                  <div class="news-article-container">
                    <div class="news-article">
                      <div class="news-article-info">
                        <p class="news-article-title">
                          Watch to watch in markets in the week ahead
                        </p>
                        <p class="news-article-description">
                          Investors may take the Federal Reserve's first
                          post-pandemic interest rate hike in stride, while
                          uncertainity over the Ukraine crisis contiues to hang
                          over markets.
                        </p>
                      </div>
                      <img
                        class="news-article-img"
                        src="https://image.cnbcfm.com/api/v1/image/107029312-Traders-TF-Photo-20220311-ACJ-010-PRESS-3.jpg?v=1647028314&w=740&h=416"
                        alt=""
                      />
                    </div>
                    <hr class="separation-line" />
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

export default News;
