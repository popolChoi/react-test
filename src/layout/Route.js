import React from "react";
import Container from "./container/Container";


function Route(props = []) {
  console.log(props);
  return (
    <React.Fragment>
      <Container {...props}/>
    </React.Fragment>
  );
}

export default Route;
