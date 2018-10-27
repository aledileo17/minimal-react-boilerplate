import React, { Component, Fragment } from "react";
import MyMapComponent from "./MyMapComponent";
import Grid from "@material-ui/core/Grid";
import CardComponent from "./CardComponent";

class MainMap extends Component {
  state = {
    lat: undefined,
    long: undefined,
    apiKey: "AIzaSyBwQFOi3ao5k24vs-S4mxAmrkmW_i_M_8c"
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
    });
  }

  render() {
    return (
      <Grid container style={{ display: "flex" }}>
        <Grid
          item
          xs={6}
          style={{ height: "calc(100vh - 69px)", overflow: "scroll" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start"
            }}
          >
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </Grid>
        <Grid item xs={6}>
          {this.state.lat && (
            <MyMapComponent
              lat={this.state.lat}
              long={this.state.long}
              isMarkerShown
              googleMapURL={`http://maps.googleapis.com/maps/api/js?key=${
                this.state.apiKey
              }&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: `calc(100vh - 69px)`, width: "50vw" }} />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default MainMap;
