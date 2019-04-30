import React from 'react'
import { NavLink } from "react-router-dom";
import {SidebarWrapper} from '../styled'

const Sidebar = ({value}) => {
    return (
        <SidebarWrapper value={value}>
            <div id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <NavLink className="list-group-item" activeClassName="active" to="/aa">particle-effect-button</NavLink>
                    <NavLink className="list-group-item" activeClassName="active" to="/bb">pageB</NavLink>
                </div>
            </div>
        </SidebarWrapper>
    )
}

Sidebar.defaultProps = {
    value: false
}

export default Sidebar