import request from "supertest";
import mongoose from "mongoose";
import { OrderStatus } from "@blackbazar/common";

import { app } from "../../app";
import { Order } from "../../models/order";
import { stripe } from "../../stripe";

it("returns a 404 when purchasing an order does not exist", async () => {
  await request(app)
    .post("/api/payments")
    .set("Cookie", global.getCookie())
    .send({
      token: "sometoken",
      orderId: new mongoose.Types.ObjectId().toHexString(),
    })
    .expect(404);
});

it("returns a 401 when purchasing an order that does not belong to the user", async () => {
  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    userId: new mongoose.Types.ObjectId().toHexString(),
    price: 20,
    status: OrderStatus.Created,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", global.getCookie())
    .send({
      token: "sometoken",
      orderId: order.id,
    })
    .expect(401);
});

it("returns a 400 when purchasing a cancelled order", async () => {
  const userId = new mongoose.Types.ObjectId().toHexString();

  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    userId,
    price: 20,
    status: OrderStatus.Cancelled,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", global.getCookie(userId))
    .send({
      orderId: order.id,
      token: "sometoken",
    })
    .expect(400);
});

it("returns a 204 with valid inputs", async () => {
  const userId = new mongoose.Types.ObjectId().toHexString();
  const randomPrice = Math.floor(Math.random() * 100000);

  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    userId,
    price: randomPrice,
    status: OrderStatus.Created,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", global.getCookie(userId))
    .send({
      token: "tok_visa",
      orderId: order.id,
    })
    .expect(201);

  const stripeCharges = await stripe.charges.list({ limit: 50 });
  const stripeCharge = stripeCharges.data.find((charge) => {
    return charge.amount === randomPrice * 100;
  });

  expect(stripeCharge).toBeDefined();
  expect(stripeCharge?.currency).toEqual("usd");
});
