import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/actions/userAction";

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    let user = {
      name,
      email,
      password,
    };
    console.log(user);
    dispatch(registerAction(user));
  };

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
      <h3 className="mb-5">Sign Up</h3>
      <div className="mb-3">
        <label style={{ display: "flex" }}>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

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
      <div className="mb-5">
        <label style={{ display: "flex" }}>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button
          type="submit"
          onClick={(e) => {
            handleSignUp();
            e.preventDefault();
          }}
          className="btn btn-primary"
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </form>
  );
};

export default SignUp;
