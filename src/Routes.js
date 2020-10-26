import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Tset from "./test";

import { Route as Layout } from "./layout";
import { Route as ScrollEvent } from "./scrollEvent";


const component_list = [
  {
    // link: <Link to="/scrollEvent" style={{ color: 'inherit', textDecoration: 'inherit'}}>scrollEvent</Link>,
    name: false,
    path: "/home",
    component : () => <div>내용 맹무</div>,
  },
  {
    // link: <Link to="/scrollEvent" style={{ color: 'inherit', textDecoration: 'inherit'}}>scrollEvent</Link>,
    name: 'scrollEvent',
    path: "/scrollEvent",
    component : () => <div><ScrollEvent /></div>,
  },
  {
    name: 'router1',
    path: "/router1",
    component : () => <div>router1</div>,
  },
  {
    name: 'router2',
    path: "/router2",
    component : () => <div>router2</div>,
  },
  {
    name: 'router3',
    path: "/router3",
    component : () => <div>router3</div>,
  },
];

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout component_list ={component_list}>
        <Switch>
          <Redirect exact path="/" to="/home" />
          {component_list.map((c, i)=><Route exact key={i} path={c.path} component={c.component} />)}
          <Route component={() => <Tset />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
