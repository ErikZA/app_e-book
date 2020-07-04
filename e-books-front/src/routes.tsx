import React from "react";
import { Switch, Route } from "react-router-dom";

import HomaPanel from "./components/home/panel";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import LoginPage from "./components/login";
import SignUpPage from "./components/login/signUp";
import LoginUsers from "./components/login/loginUsers";
import ForgotPassword from "./components/login/forgotPassword";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signUp" component={LoginPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/forgotPassword" component={LoginPage} />
      <Route path="*" component={HomePage} />
    </Switch>
  );
};

const RoutesHome = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomaPanel} />
    </Switch>
  );
};

const RoutesLogin = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginUsers} />
      <Route exact path="/signUp" component={SignUpPage} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
    </Switch>
  );
};

export { Routes, RoutesHome, RoutesLogin };
