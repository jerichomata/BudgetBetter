//carousel nav buttons chagning slides
document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
    <div class="carousel__nav">
      ${buttonsHtml.join("")}
    </div>
  `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");
  var currentCarousel = 0;
  const maxCarousel = items.length - 1;

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) => (item.style.display = "none"));
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].style.display = "block";
      currentCarousel = i;
      button.classList.add("carousel__button--selected");
    });
  });

  carousel.querySelector(".left-arrow").addEventListener("click", () => {
    items.forEach((item) => (item.style.display = "none"));
    buttons.forEach((button) =>
      button.classList.remove("carousel__button--selected")
    );
    currentCarousel--;
    if (currentCarousel == -1) currentCarousel = maxCarousel;

    items[currentCarousel].style.display = "block";
    buttons[currentCarousel].classList.add("carousel__button--selected");
  });

  carousel.querySelector(".right-arrow").addEventListener("click", () => {
    items.forEach((item) => (item.style.display = "none"));
    buttons.forEach((button) =>
      button.classList.remove("carousel__button--selected")
    );
    currentCarousel++;
    if (currentCarousel > maxCarousel) currentCarousel = 0;

    items[currentCarousel].style.display = "block";
    buttons[currentCarousel].classList.add("carousel__button--selected");
  });

  // Select the first item on page load
  buttons[0].classList.add("carousel__button--selected");
});

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const sideBar = document.querySelectorAll(".sidebar a");
const mainMenu = document.querySelectorAll("main .tab");
const carousels = document.querySelectorAll(".carousel__item");
const newsArticles = document.querySelectorAll(".news-article");

//show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//change theme

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");

  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

sideBar.forEach(function (sideTab, index) {
  if (index != 7) {
    sideTab.addEventListener("click", () => {
      sideBar.forEach(function (tab) {
        tab.classList.remove("active");
      });
      mainMenu.forEach(function (menu) {
        menu.style.display = "none";
      });
      mainMenu[index].style.display = "block";
      sideTab.classList.add("active");
    });
  }
});

newsArticles.forEach(function (article, index) {
  article.addEventListener("click", () => {
    if (index == 0)
      window.open(
        "https://www.nytimes.com/2022/03/18/obituaries/don-young-obituary-alaska.html",
        "_blank"
      );
    else if (index == 1)
      window.open(
        "https://www.cnbc.com/2022/03/15/why-the-federal-reserve-raises-interest-rates-to-combat-inflation-.html",
        "_blank"
      );
    else
      window.open(
        "https://www.cnbc.com/2022/03/11/federal-reserve-expected-to-raise-interest-rates-in-week-ahead.html",
        "_blank"
      );
  });
});

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Account Balance",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 3000, 5000, 2000, 8000, 1500],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(carousels[0], config);

const data2 = {
  labels: labels,
  datasets: [
    {
      label: "Credit Score",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [580, 600, 620, 660, 740, 680],
    },
  ],
};

const config2 = {
  type: "line",
  data: data2,
  options: {},
};

const myChart2 = new Chart(carousels[1], config2);

const data3 = {
  labels: labels,
  datasets: [
    {
      label: "Income",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [3200, 3500, 4000, 4600, 5200, 5500],
    },
  ],
};

const config3 = {
  type: "line",
  data: data3,
  options: {},
};

const myChart3 = new Chart(carousels[2], config3);

// User data
const userSettings = document.querySelectorAll(".profile-section-box");
const userName = document.querySelector(".profile b");

function configureUser(userData) {
  var bankAccount;
  userData["User"]["accounts"].forEach(function (account) {
    if (account["subtype"] == "checking") bankAccount = account;
  });
  const user = bankAccount["owners"][0];
  console.log(user);
  userSettings.forEach(function (settings) {
    console.log(settings);
    var settingName = settings.querySelector("h5").innerHTML;
    console.log(settingName);
    var settingData = settings.querySelector("p");
    console.log(settingData);
    if (settingName == "Email:") {
      user["emails"].forEach(function (email) {
        if (email["primary"]) settingData.innerHTML = email["data"];
      });
    }
    if (settingName == "Name:") {
      settingData.innerHTML = user["names"][0];
      userName.innerHTML = user["names"][0];
    }
    if (settingName == "Phone:") {
      user["phone_numbers"].forEach(function (number) {
        if (number["primary"]) settingData.innerHTML = number["data"];
      });
      if (settingData.innerHTML == "")
        settingData.innerHTML = user["phone_numbers"][0]["data"];
    }
  });
}

const accountBalance = document.getElementById("account-balance-num");

function retrieveBalance(balanceData) {
  var bankAccount;
  var transactions = [];
  balanceData["Balance"]["accounts"].forEach(function (account) {
    if (account["type"] == "other") transactions.push(account);
    else if (account["subtype"] == "checking") bankAccount = account;
  });
  if (bankAccount) {
    console.log(transactions);
    var expenses = 0;
    transactions.forEach(function (transaction) {
      expenses += transaction["balances"]["limit"];
    });
    var balance = bankAccount["balances"]["current"];
    console.log(balance);
    accountBalance.innerHTML = `$${balance + expenses}`;
  }
}

const availableCredit = document.getElementById("available-credit");

function getAvailableCredit(balanceData) {
  var bankAccount;
  balanceData["Balance"]["accounts"].forEach(function (account) {
    if (account["subtype"] == "credit card") bankAccount = account;
  });
  if (bankAccount) {
    var balance = bankAccount["balances"]["current"];
    var limit = bankAccount["balances"]["limit"];
    console.log(balance);
    availableCredit.innerHTML = `$${limit - balance}`;
  }
}

const expensesData = document.getElementById("account-expenses");

function getExpensesDashboard(balanceData) {
  var transactions = [];
  balanceData["Balance"]["accounts"].forEach(function (account) {
    if (account["type"] == "other") transactions.push(account);
  });
  if (transactions.length) {
    var expenses = 0;
    transactions.forEach(function (transaction) {
      if (transaction["balances"]["limit"] < 0)
        expenses += transaction["balances"]["limit"];
    });
    expensesData.innerHTML = `$${-expenses}`;
  }
}

const balanceExpense = document.getElementById("balance-expense");
const positiveExpense = document.getElementById("money-plus");
const negativeExpense = document.getElementById("money-minus");

function getExpenses(balanceData) {
  var bankAccount;
  var transactions = [];
  balanceData["Balance"]["accounts"].forEach(function (account) {
    if (account["type"] == "other") transactions.push(account);
    else if (account["subtype"] == "checking") bankAccount = account;
  });
  if (transactions.length) {
    var expenses = 0;
    var income = 0;
    transactions.forEach(function (transaction) {
      if (transaction["balances"]["limit"] < 0)
        expenses += transaction["balances"]["limit"];
      else income += transaction["balances"]["limit"];
    });
    var balance = bankAccount["balances"]["current"];
    balanceExpense.innerHTML = `$${balance + expenses + income}`;
    positiveExpense.innerHTML = `+$${income}`;
    negativeExpense.innerHTML = `$${expenses}`;
  }
}

// grab ur stuff
// const balanceExpense = document.getElementById("balance-expense");
// const positiveExpense = document.getElementById("money-plus");
// const negativeExpense = document.getElementById("money-minus");
const table = document.querySelector("recent-transaction-table");
const tableBody = document.getElementById("table-body");

const firstRecent = document.getElementById("first-recent-transaction");
const secondRecent = document.getElementById("second-recent-transaction");
const thirdRecent = document.getElementById("third-recent-transaction");

const firstRecentAmount = document.getElementById("first-recent-amount");
const secondRecentAmount = document.getElementById("second-recent-amount");
const thirdRecentAmount = document.getElementById("third-recent-amount");

function getTransactions(balanceData) {
  var transactions = [];
  balanceData["Balance"]["accounts"].forEach(function (account) {
    if (account["type"] == "other") transactions.push(account);
  });
  if (transactions.length) {
    for (var i = transactions.length - 1; i >= 0; i--) {
      var amount = transactions[i]["balances"]["limit"];
      var name = transactions[i]["name"];
      var date = transactions[i]["official_name"];
      console.log(amount);
      console.log(name);
      console.log(date);
      console.log(i);

      if(amount > 0)
      {
        tableBody.innerHTML += `
        <tr>
          <td>${name}</td>
          <td>${date}</td>
          <td>${amount}</td>
          <td class='success'> Income </td>
        </tr>
        `;
      }
      else
      {
        tableBody.innerHTML += `
        <tr>
          <td>${name}</td>
          <td>${date}</td>
          <td>${amount}</td>
          <td class='warning'> Expense </td>
        </tr>
        `;
      }

      // do your normal stuff here

      // if( i >= transactions.length - 3)
      //

      if (i === transactions.length - 1) {
        firstRecent.innerHTML = name;
        firstRecentAmount.innerHTML = `$${amount}`;
      }

      if (i === transactions.length - 2) {
        secondRecent.innerHTML = name;
        secondRecentAmount.innerHTML = `$${amount}`;
      }

      if (i === transactions.length - 3) {
        thirdRecent.innerHTML = name;
        thirdRecentAmount.innerHTML = `$${amount}`;
      }
    }
  }
}
