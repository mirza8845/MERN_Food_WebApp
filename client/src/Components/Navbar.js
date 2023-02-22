import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-body-tertiary">
      <a className="navbar-brand" href="#">
        Pizza Corner
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ justifyContent: "flex-end" }}
      >
        <ul className="navbar-nav ml-auto mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
