import React, { Component, Fragment } from "react";

import Header from "./Header";
import Main from "./Main";
import "./index.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header className="header" />

        <Main className="main" />
      </Fragment>
    );
  }
}

export default App;
