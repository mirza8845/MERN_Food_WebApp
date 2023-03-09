import React from "react";

const Loader = () => {
  return (
    <div style={{ marginTop: "30%" }}>
      <div
        className="spinner-grow text-dark"
        role="status"
        style={{ height: "30px", width: "30px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-dark"
        role="status"
        style={{ height: "30px", width: "30px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-dark"
        role="status"
        style={{ height: "30px", width: "30px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
