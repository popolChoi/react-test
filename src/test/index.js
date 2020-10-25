import logo from "./logo.svg";

import "./App.scss";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{left: "0px",}}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>404</p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
