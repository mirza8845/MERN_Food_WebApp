import React, { useState, useEffect } from "react";
import pizzaMnue from "../Assets/dummyData";
import PizzaComp from "../Components/PizzaComp";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../redux/actions/pizzaAction";
import { addToCart, deleteFromCart } from "../redux/actions/cartAction";
import Checkout from "../Components/Checkout";
// import moment from "moment";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  let subTotal = cartState?.cartItems.reduce((x, item) => x + item.price, 0);
  // console.log("subTotal", subTotal);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getAllPizzas());
  //   }, []);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>My Cart</h2>
          {cartState.cartItems.map((item) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                border: "1px solid black",
              }}
            >
              <div className="text-left m-3 p-3">
                <div>
                  {item.name} [{item.variant}]
                </div>
                <br />
                <div>
                  Price: {item.quantity} * {item.prices[0][item.variant]} ={" "}
                  {item.price}
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>Quantity:</div>
                  <span
                    style={{ margin: "0px 5px 0px 5px", cursor: "pointer" }}
                    onClick={() =>
                      dispatch(addToCart(item, item.quantity + 1, item.variant))
                    }
                  >
                    +
                  </span>
                  <span>{item.quantity}</span>
                  <span
                    style={{ margin: "0px 5px 0px 5px", cursor: "pointer" }}
                    onClick={() => {
                      item.quantity > 1
                        ? dispatch(
                            addToCart(item, item.quantity - 1, item.variant)
                          )
                        : dispatch(deleteFromCart(item));
                    }}
                  >
                    -
                  </span>
                </div>
              </div>
              <div className="m-3 p-3">
                <img
                  src={item.image}
                  style={{ height: "100px", width: "100px" }}
                />
                <span
                  style={{
                    margin: "0px 5px 0px 5px",
                    border: "1px solid black",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(deleteFromCart(item))}
                >
                  x
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 text-right">
          <h2>Total Price: {subTotal} Rs</h2>
          <Checkout subTotal={subTotal} />
          {/* <button
            className="btn"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Chekout
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
