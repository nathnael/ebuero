import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/ebuero.scss";
import "./assets/sample/sample.css";
// pages
import Index from "views/Index.js";

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
