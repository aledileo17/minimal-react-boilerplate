import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Donar from "./Donar";
import Recibir from "./Recibir";
import Login from "./Login";
import MainMap from "./MainMap";
import Grid from "@material-ui/core/Grid";

const Main = () => (
  <Grid
    container
    style={{ height: "100%" }}
    justify="center"
    alignItems="center"
    container
    direction="row"
  >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/donar" component={Donar} />
      <Route path="/recibir" component={Recibir} />
      <Route path="/login" component={Login} />
      <Route path="/map" component={MainMap} />
    </Switch>
  </Grid>
);

export default Main;
