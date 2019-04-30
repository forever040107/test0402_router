import React from 'react'
import { Link } from "react-router-dom";

const Nav = ({onClick}) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button type="button" onClick={onClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="btn btn-primary" to="/">Home</Link>        
    </div>
  )
}

export default Nav