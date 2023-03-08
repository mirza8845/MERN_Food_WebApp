import React from "react";

import StripeCheckout from "react-stripe-checkout";

const Checkout = (props) => {
  const { subtotal } = props;

  const tokenHandler = (token) => {
    console.log("token", token);
  };

  return (
    <div>
      <StripeCheckout
        amount={subtotal}
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
