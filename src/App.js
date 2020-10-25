import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Tset from "./test";

import { Route as Layout } from "./layout";
import { Route as ScrollEvent } from "./scrollEvent";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/layout" />
        <Route exact path="/layout" component={() => <Layout />} />
        <Route exact path="/scrollEvent" component={() => <ScrollEvent />} />

        <Route component={() => <Tset />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
