import React from "react";
import { Link } from 'react-router-dom'

import  './NavItem.css'

const NavItem = (props) => {
    return (
        <li className="link-li">
            <Link to={props.href}>{props.name}</Link>            
        </li>
    )
};




export default NavItem
