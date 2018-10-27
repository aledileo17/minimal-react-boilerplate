import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Main from "./Main";
import "./index.scss";


class App extends Component {
  render() {
    return (
      <Grid
        item
        xs={12}
        style={{ height: "100%" }}
        justify="center"
        alignItems="center"
        container
        direction="row"
      >
        <Header className="header" />
        <Main className="main" />
      </Grid>
    );
  }
}

export default App;
