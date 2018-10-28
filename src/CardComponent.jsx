import React, { Component, Fragment } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  ExpansionPanelDetails,
  Chip,
  LinearProgress
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class CardComponent extends Component {
  render() {
    return (
      <Card style={{ display: "flex", borderBottom: "1px solid #dce3e5" }}>
        <CardMedia
          component="img"
          image={this.props.image}
          title="Live from space album cover"
          style={{ width: "280px", height: "186px" }}
        />
        <CardContent style={{ width: "100%" }}>
          <Typography component="h5" variant="h5">
            {this.props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Alimentando a <b>{this.props.numero}+</b> por día.
          </Typography>
          <Chip
            style={{ marginTop: "15px" }}
            variant="outlined"
            label={this.props.comidas}
          />
          <LinearProgress
            style={{ marginTop: "15px" }}
            variant="determinate"
            color="secondary"
            value={this.props.numero / 10}
          />
        </CardContent>
      </Card>
    );
  }
}

export default CardComponent;
