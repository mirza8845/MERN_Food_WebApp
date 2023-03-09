import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersOrders } from "../redux/actions/orderAction";
const OrderScreen = (props) => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state) => state.userOrdersReducer);
  const { orders, error, loading } = ordersData;
  useEffect(() => {
    dispatch(getUsersOrders());
  }, []);
  console.log("orders", orders);
  return (
    <div style={{ overflow: "auto" }}>
      <h2>My Orders</h2>
      {orders &&
        orders.map((item, index) => (
          <div class="card-group" style={{ margin: "0px 80px 0px 80px" }}>
            <div class="card m-3">
              <div class="card-body">
                <h5 class="card-title">Order No#: {index + 1}</h5>
                <h5 class="card-title">User Name: {item.name}</h5>
                <p class="card-text">CardId: {item.transactionId}</p>
                <p class="card-text">Payment Status: Done</p>
                <p class="card-text">Order Status: Placed</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderScreen;
