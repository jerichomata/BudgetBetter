import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import Reminders from "./components/Reminders/Reminders";
import Goals from "./components/Goals/Goals";
import Settings from "./components/SettingsTab/Settings";
import HomePage from "./components/HomePage/HomePage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
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
          <HomePage />
        </Route>
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute path="/expenses">
          <ExpenseTracker />
        </ProtectedRoute>
        <ProtectedRoute path="/notifications">
          <Reminders />
        </ProtectedRoute>
        <ProtectedRoute path="/news">
          <Goals />
        </ProtectedRoute>
        <ProtectedRoute path="/settings">
          <Settings />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
