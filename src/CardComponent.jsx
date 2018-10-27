import React, { Component, Fragment } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  ExpansionPanelDetails
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class CardComponent extends Component {
  render() {
    return (
      <Card style={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={this.props.image}
          title="Live from space album cover"
          style={{ width: "280px", height: "186px" }}
        />
        <CardContent>
          <Typography component="h5" variant="h5">
            {this.props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default CardComponent;
