import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/userAction";
const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    let user = {
      email,
      password,
    };
    console.log(user);
    dispatch(loginAction(user));
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label style={{ display: "flex" }}>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        <button
          onClick={(e) => {
            handleLogin();
            e.preventDefault();
          }}
          type="submit"
          className="btn btn-primary"
        >
          Sign In
        </button>
        <p className="forgot-password text-right">
          Not Have an Account <a href="/signup">Sign Up here</a>
        </p>
      </div>
    </form>
  );
};

export default Login;
