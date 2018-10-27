import React, { Component, Fragment } from "react";
import "./index.scss";
import MyMapComponent from "./MyMapComponent";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

class App extends Component {
  state = {
    lat: undefined,
    long: undefined
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
    });
  }
  state = {
    apiKey: "AIzaSyBwQFOi3ao5k24vs-S4mxAmrkmW_i_M_8c"
  };
  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={12} />

          <Grid item xs={12}>
            <MyMapComponent
              lat={this.state.lat || 1}
              long={this.state.long || 1}
              isMarkerShown
              googleMapURL={`http://maps.googleapis.com/maps/api/js?key=${
                this.state.apiKey
              }&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default App;
