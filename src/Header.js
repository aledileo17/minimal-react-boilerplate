import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import logo from "./logo.png";

const Header = () => (
  <header>
    <AppBar color="#" position="static">
      <Link to="/">
        <Toolbar style={{ position: "fixed" }}>
          <img src={logo} />
        </Toolbar>
      </Link>
      <nav>
        <ul className="navbarlist">
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </AppBar>
  </header>
);

export default Header;
