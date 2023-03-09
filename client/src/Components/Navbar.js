import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/userAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  var userState = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-body-tertiary">
      <a className="navbar-brand" href="/">
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
          {userState ? (
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userState.name}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/order">
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => dispatch(logoutAction())}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <li className="nav-item active">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          )}
          <li className="nav-item">
            <a className="nav-link" href="/cart">
              Cart {cartState.cartItems.length}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
