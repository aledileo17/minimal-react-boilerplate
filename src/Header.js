import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

const Header = () => (
  <header>
    <AppBar color="primary">
      <nav>
        <ul className="navbarlist">
          <li>
            <Link to="/login/">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </AppBar>
  </header>
);

export default Header;
