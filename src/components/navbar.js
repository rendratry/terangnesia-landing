import React, { useEffect } from 'react';
import navbarInit from '../js/bootstrap-navbar';

const Navbar = () => {
  useEffect(() => {
    // Call the navbar initialization function when the component mounts
    navbarInit();
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" data-navbar-on-scroll="data-navbar-on-scroll">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="https://terangnesia.sgp1.cdn.digitaloceanspaces.com/app-assets/terangnesia-logo-primary.png" height="60" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#feature">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#validation">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#superhero">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#marketing">
                Resources
              </a>
            </li>
          </ul>
          <div className="d-flex ms-lg-4">
            <a className="btn btn-secondary-outline" href="#!">
              Sign In
            </a>
            <a className="btn btn-warning ms-3" href="#!">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;