import React, { useEffect } from "react";
import { placeOrder } from "../redux/actions/orderAction";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Checkout = (props) => {
  const { subTotal } = props;
  const orderState = useSelector((state) => state.orderReducer);
  console.log(orderState);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    console.log("token", token);
    dispatch(placeOrder(token, subTotal));
  };

  console.log("subtotal", subTotal);

  useEffect(() => {
    if (success) {
      toast.success("Order Placed Successfully");
    }
  }, [success]);

  return (
    <div>
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MjK2BD5Qro9kbxkJXp27r45PRs7U43upMWaVsh3tIGnj3oj3aBrLENjgAFUXNPow6NkOhffxdEyGnzdPsw9WfEI00IMqxP3ZW"
        currency="PKR"
      >
        <button className="btn btn-danger">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
