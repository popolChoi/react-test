import React from "react";
import { Route as Layout } from "../layout";

// import Container from "./container/Container";

function Route() {
  return (
    <React.Fragment>
      {/* <img src="https://source.unsplash.com/random" width="245" /> */}
     {[...new Array(30)].map(() => (
          <p>
            스크롤 이벤트!!!
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
          </p>
        ))}
      
    </React.Fragment>
  );
}

export default Route;
