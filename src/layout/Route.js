import React from "react";
import Container from "./container/Container";


function Route(props = {}) {
  return (
    <React.Fragment>
      <Container component={props.component}/>
    </React.Fragment>
  );
}

export default Route;
