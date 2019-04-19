import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "../actions";
import Nav from "../components/Nav";

const NavButton = ({
  value,
  toggleSidebar
}) => (
    <Nav
      onClick={() => toggleSidebar(value)}
    />
);

const mapDispatchToProps = dispatch => ({
  toggleSidebar: value => dispatch(toggleSidebar(value))
});

const ToggleNav = connect(
  null,
  mapDispatchToProps
)(NavButton);

export default ToggleNav;
