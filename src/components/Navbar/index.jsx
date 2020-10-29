import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  NavLink
} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-dark sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-center">
        <NavLink className="py-2 d-none d-md-inline-block mr-5 pr-5 text-white text-decoration-none font-weight-bold" to="/">Webistic</NavLink>
        <NavLink className="py-2 d-none d-md-inline-block mr-5 pr-5 text-white text-decoration-none font-weight-normal" to="/about"><FormattedMessage id="navbar.about"/></NavLink>
        <NavLink className="py-2 d-none d-md-inline-block text-white text-decoration-none font-weight-normal" to="/works"><FormattedMessage id="navbar.works"/></NavLink>
      </div>
    </nav>
  )
}
