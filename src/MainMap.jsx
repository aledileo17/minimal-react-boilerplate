import React, { Component } from "react";
import MyMapComponent from "./MyMapComponent";
import Grid from "@material-ui/core/Grid";
import CardComponent from "./CardComponent";
import burgerportada from "./burgerportada.jpg";
import mcdonalds from "./mcdonalds.png";
import kfc from "./kfclogo.png";

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
    const data = [
      {
        name: "Burger King Caballito",
        image: burgerportada,
        numero: 500,
        comida: "Hamburguesas"
      },
      {
        name: "Mc Donalds",
        image: mcdonalds,
        numero: 300,
        comida: "Hamburguesas"
      },
      {
        name: "KFC",
        image: kfc,
        numero: 700,
        comida: "Pollo Frito"
      },
      {
        name: "Burger King Centro",
        image: burgerportada,
        numero: 400,
        comida: "Hamburguesas"
      }
    ];

    return (
      <Grid container style={{ display: "flex" }}>
        <Grid
          item
          xs={6}
          style={{ height: "calc(100vh - 69px)", overflowY: "auto" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start"
            }}
          >
            {data.map(data => {
              return (
                <CardComponent
                  name={data.name}
                  image={data.image}
                  key={data.name}
                  numero={data.numero}
                  comidas={data.comida}
                />
              );
            })}
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
