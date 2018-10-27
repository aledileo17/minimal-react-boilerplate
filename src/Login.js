import React from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router";

class Login extends React.Component {
  state = {
    name: "",
    pass: "",
    redirect: false
  };
  handleName = event => {
    this.setState({ name: event.target.value });
  };
  handlePass = event => {
    this.setState({ pass: event.target.value });
  };
  handleForm = () => {
    if (this.state.name === "equipo5" && this.state.pass === "elmejor") {
      this.setState({ redirect: true });
    }
  };
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/map/" />;
    }
    return (
      <form style={{ maxWidth: "200px" }}>
        <label>Usuario:</label>
        <input type="text" onChange={this.handleName} />
        <label>Contraseña:</label>
        <input type="password" onChange={this.handlePass} />
        <Button variant="contained" color="secondary" onClick={this.handleForm}>
          Log in
        </Button>
      </form>
    );
  }
}

export default Login;
