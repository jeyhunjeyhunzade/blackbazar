import { useState, useEffect } from "react";
import Router from "next/router";
import StripeCheckout from "react-stripe-checkout";

import { useRequest } from "../../hooks/useRequest";

const OrderPage = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push("/orders"),
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    calculateTimeLeft();

    const calculateInterval = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(calculateInterval);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order expired</div>;
  }

  return (
    <div style={{ fontVariant: "tabular-nums" }}>
      Time left to pay: {timeLeft} seconds
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        amount={order.ticket.price * 100}
        email={currentUser.email}
        stripeKey="pk_test_51OCmkMFygxkkxeiesAEOPON5BiaXqhJHfOakKimiuNLNU9LdgVuHQCOTHbnWoZMq77mJ9XtixnLeLboBLLiYL6lk00NuelWCzH"
      />
      {errors}
    </div>
  );
};

OrderPage.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderPage;
