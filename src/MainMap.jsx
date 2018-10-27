import React, { Component, Fragment } from "react";
import MyMapComponent from "./MyMapComponent";
import Grid from "@material-ui/core/Grid";

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
      <Fragment>
        <Grid container>
          <Grid item xs={12}>
            Test
          </Grid>

          <Grid item xs={12}>
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
                  <div
                    style={{ height: `100vh`, width: "50vw", float: "right" }}
                  />
                }
                mapElement={<div style={{ height: `100%` }} />}
              />
            )}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default MainMap;
