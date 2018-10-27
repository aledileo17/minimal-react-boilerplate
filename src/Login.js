import React from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router";
import Grid from "@material-ui/core/Grid";
import logo from "./logo.png";
import TextField from "@material-ui/core/TextField";

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
      <Grid
        item
        xs={12}
        style={{
          height: "calc(100vh - 69px)",
          maxWidth: "200px"
        }}
        justify="center"
        alignItems="center"
        alignContent="center"
        container
        direction="row"
      >
        {/* <img src={logo} style={{ marginBottom: "24px" }} /> */}
        <form style={{ maxWidth: "200px" }}>
          {/* <label>Usuario:</label>
          <input type="text" onChange={this.handleName} /> */}

          <TextField
            id="standard-name"
            label="User"
            onChange={this.handleName}
            margin="normal"
          />

          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            onChange={this.handlePass}
          />
          {/* <label>Contraseña:</label>
          <input type="password" onChange={this.handlePass} /> */}
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleForm}
            style={{ marginTop: "24px" }}
          >
            Log in
          </Button>
          <div style={{ marginTop: "24px" }}>
            ¿No tenés usuario?
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "8px" }}
            >
              Registrate
            </Button>
          </div>
        </form>
      </Grid>
    );
  }
}

export default Login;
