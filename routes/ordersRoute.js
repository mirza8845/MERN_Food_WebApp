const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51MjK2BD5Qro9kbxkM2XSZRHACII9z8vs6pvfUnR5j7P9eAXsq4DWxHHS2aPMBPyQjPIaRJkYd3PL8Hm8gucR8dWp00iYMyfGIo"
);
const Orders = require("../models/ordersModel");

router.post("/placeorder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "PKR",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const neworder = new Orders({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser.userid,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAdress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });

      neworder.save();

      res.send("Payment Done");
    } else {
      res.send("Payment Failed");
    }
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" + err });
  }
});

router.get("/user_orders", async (req, res) => {
  const { userid } = req.body;
  try {
    const order = await Orders.find({ userid: userid });
    res.send(order);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

module.exports = router;
