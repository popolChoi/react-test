import React from "react";
import Container from "./container/Container";

import "semantic-ui-css/semantic.min.css";
import "./css/style.scss";

function Route(props = {}) {
  return (
    <React.Fragment>
      <Container component={props.component}/>
    </React.Fragment>
  );
}

export default Route;
