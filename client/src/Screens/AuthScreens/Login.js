import React, { Component } from "react";
export default class Login extends Component {
  render() {
    return (
      <form
        className="m-auto shadow-lg bg-white rounded"
        style={{
          // border: "1px solid black",
          maxWidth: "50%",
          padding: "10%",
          borderRadius: "20px",
        }}
      >
        <h3 className="mb-5">Sign In</h3>
        <div className="mb-3">
          <label style={{ display: "flex" }}>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label style={{ display: "flex" }}>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div
          className="mb-5"
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
          <p className="forgot-password text-right">
            Not Have an Account <a href="/signup">Sign Up here</a>
          </p>
        </div>
      </form>
    );
  }
}
