import React from "react";
import { connect } from "react-redux";
import { toggleSidebar} from "../actions";
import Sidebar from "../components/Sidebar";

const SidebarDiv = ({
    toggle
}) => {
    return(
        <Sidebar value={toggle.value} />
    )
};

const mapStateToProps = state => ({
    toggle: state
})

const mapDispatchToProps = dispatch => ({
  toggleSidebar: value => dispatch(toggleSidebar(value))
});

const ToggleSidebar = connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarDiv);

export default ToggleSidebar;
