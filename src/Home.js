import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import Grid from "@material-ui/core/Grid";

class Home extends React.Component {
  state = {
    redirectDonar: false,
    redirectRecibir: false
  };
  handleDonarClick = () => {
    this.setState({ redirectDonar: true });
  };
  handleRecibirClick = () => {
    this.setState({ redirectRecibir: true });
  };
  render() {
    if (this.state.redirectDonar) {
      return <Redirect push to="/donar/" />;
    }
    if (this.state.redirectRecibir) {
      return <Redirect push to="/recibir/" />;
    }
    return (
      <Grid
        item
        style={{ height: "100vh" }}
        justify="center"
        alignItems="center"
        container
        direction="row"
      >
        <div>
          <Typography variant="title">¡Bienvenido!</Typography>
          <p>
            Nos ocupamos de ser el nexo entre los comercios que tienen sobrantes
            y los puntos de distribución para los que menos tienen. Vos, ¿qué
            querés hacer?
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleDonarClick}
          >
            Dono
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleRecibirClick}
          >
            Recibo
          </Button>
        </div>
      </Grid>
    );
  }
}

export default Home;
