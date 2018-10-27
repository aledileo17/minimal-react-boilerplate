import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

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
      <div>
        <Typography variant="title">¡Bienvenido!</Typography>
        <p>
          Nos ocupamos de ser el nexo entre los comercios que tienen sobrantes y
          los puntos de distribución para los que menos tienen. Vos, ¿qué querés
          hacer?
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
    );
  }
}

export default Home;
