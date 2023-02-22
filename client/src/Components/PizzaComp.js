import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const PizzaComp = (props) => {
  const { compData } = props;

  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
        style={{ width: "100%", backgroundColor: "white", margin: "55px" }}
      >
        <h1>{compData.name}</h1>
        <img
          onClick={() => setShow(true)}
          src={compData.image}
          style={{ height: 200, width: 200 }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <h5>Varients</h5>
          <h5>Quantity</h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <select
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
            style={{ width: "40%", height: "30px", borderRadius: "5px" }}
          >
            {compData.varients.map((val) => (
              <option value={val}>{val}</option>
            ))}
          </select>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ width: "40%", height: "30px", borderRadius: "5px" }}
          >
            {Array(10)
              .fill()
              .map((val, i) => (
                <option value={i + 1}>{i + 1}</option>
              ))}
          </select>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
            alignItems: "center",
          }}
        >
          <h5 style={{ margin: "0px" }}>
            Price: {`${compData.prices[0][varient] * quantity} PKR`}
          </h5>
          <button
            style={{
              backgroundColor: "red",
              borderRadius: "7px",
              color: "antiquewhite",
              border: "none",
              height: "30px",
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              onClick={() => setShow(true)}
              src={compData.image}
              style={{ height: 200, width: 200, alignSelf: "center" }}
            />
          </div>
          <p style={{ marginTop: "10px" }}>{compData.description}</p>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default PizzaComp;
