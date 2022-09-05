import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import Notifications from "./components/Notifications/Notifications";
import News from "./components/News/News";
import Settings from "./components/SettingsTab/Settings";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { authenticate } from "./store/session";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <LandingPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/expenses">
          <ExpenseTracker />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
