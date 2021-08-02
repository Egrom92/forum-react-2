import React from 'react'
import './Menu.css'
import {NavLink} from "react-router-dom";


export default function Menu(props) {
    return (

        <ul className="nav justify-content-end">
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Archive</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/new-post">+ Post</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/log-in">Log Out</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/log-in">Log In</NavLink>
            </li>
        </ul>

    )
}