import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePanel from "./components/home/panel";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import LoginPage from "./components/login";
import SignUpPage from "./components/login/signUp";
import LoginUsers from "./components/login/loginUsers";
import ForgotPassword from "./components/login/forgotPassword";
import RecoverPassword from "./components/login/recoverPassword";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signUp" component={LoginPage} />
      <Route exact path="/forgotPassword" component={LoginPage} />
      <Route exact path="/recoverPassword/:token" component={LoginPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route path="*" component={HomePage} />
    </Switch>
  );
};

const RoutesHome = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePanel} />
      <Route exact path="/home" component={HomePanel} />
    </Switch>
  );
};

const RoutesLogin = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginUsers} />
      <Route exact path="/signUp" component={SignUpPage} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
      <Route exact path="/recoverPassword/:token" component={RecoverPassword} />
    </Switch>
  );
};

export { Routes, RoutesHome, RoutesLogin };
