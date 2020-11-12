import React from "react";
import { Provider } from 'mobx-react';

import Routes from './Routes';
import stores from './stores';

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "semantic-ui-css/semantic.min.css";
import "./layout/css/style.scss";
// import "./_resource/style/manufacture/part.scss";


const App = () => {
  return (
    <Provider
     {...stores}
    >
      <Routes />
    </Provider>
  
  );
};

export default App;
