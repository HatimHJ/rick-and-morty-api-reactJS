import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Rick &amp; Morty
          <span className="bg-primary text-light p-1 rounded-pill">WiKi</span>
        </Link>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-expanded="false"
        >
          <i className="ri-menu-4-line close  ri-lg"></i>
          <i className="ri-close-line open  ri-lg"></i>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">
              Characters
            </NavLink>
            <NavLink className="nav-link" to="/episode">
              Episodes
            </NavLink>
            <NavLink className="nav-link" to="/location">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
