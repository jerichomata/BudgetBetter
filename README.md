# BudgetBetter

BudgetBetter is a financial application created to help individuals manage their money. BudgetBetter users can input transactions, and view a visual representation of their financial trends. BudgetBetter users can also create reminders and goals to help them stack on track with their financial objectives.

**Live Site:** [BudgetBetter](https://budget-better-app.herokuapp.com/)

## Wiki Links

- [API Documentation](https://github.com/jerichomata/BudgetBetter/wiki/API-Routes)
- [Database Schema](https://github.com/jerichomata/BudgetBetter/wiki/Database-Schema)
- [Feature List](https://github.com/jerichomata/BudgetBetter/wiki/Feature-List)
- [User Stories](https://github.com/jerichomata/BudgetBetter/wiki/User-Stories)

## Tech Stack

### Frameworks, Platforms, and Libraries:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Database:

![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### Hosting:

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Landing Page

![readme-bb-landing](https://user-images.githubusercontent.com/95510710/189716447-e08afa67-cf72-48a3-b04d-df00597a4c0d.png)

## Dashboard

![readme-bb-dashboard](https://user-images.githubusercontent.com/95510710/189716480-734814e5-cf5d-4225-86c9-11cbf769f55d.png)

## Expense Tracker

![readme-bb-expense-tracker](https://user-images.githubusercontent.com/95510710/189716493-ea732380-ff74-4800-af38-f68859b1aac2.png)

## Run Locally

- Clone the repo
- Open up two terminals, one for the backend, and one for the frontend
- In the first terminal, in the root folder, run pipenv install to install the necessary dependencies, and then run pipenv run flask run
- In the second terminal, cd into the react-app folder, run npm install to install the necessary dependencies, and then run npm start

### Environment Variables

To run this project, you need to add the following enviroment variables to your .env file in your root folder.

```
DATABASE_URL=«insert_database_url»
SECRET_KEY=«generate_strong_secret_here»
FINNHUB_API_KEY=<<insert_free_api_key_from_finnhub>>
```

