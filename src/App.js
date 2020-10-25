import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Tset from "./test";

import { Route as Layout } from "./layout";
import { Route as ScrollEvent } from "./scrollEvent";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "semantic-ui-css/semantic.min.css";
import "./layout/css/style.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/layout" />
        <Redirect exact path="/react-test" to="/layout" />

        <Route exact path="/layout" component={() => <Layout />} />
        <Route exact path="/scrollEvent" component={() => <ScrollEvent />} />

        <Route component={() => <Tset />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
