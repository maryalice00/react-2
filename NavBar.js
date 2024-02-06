import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "reactstrap";

const NavBar = () => {
  return (
    <Navbar expand="md">
      <NavLink exact to="/" className="navbar-brand">
        Snack or Booze
      </NavLink>
      <Nav className="ml-auto" navbar>
        <NavLink to="/snacks" className="nav-link" activeClassName="active">
          Snacks
        </NavLink>
        {/* Add additional NavLink components for other navigation links */}
      </Nav>
    </Navbar>
  );
}

export default NavBar;

