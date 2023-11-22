import { useState, useEffect } from "react";
import Router from "next/router";
import { AxiosInstance } from "axios";
import { AppContext } from "next/app";
import StripeCheckout from "react-stripe-checkout";

import { useRequest } from "hooks/useRequest";
import {
  CurrentUser,
  MakePaymentParams,
  MakePaymentResponse,
  Order,
} from "/types/types";

interface CustomAppContext extends AppContext {
  query: {
    orderId: string;
  };
}

interface OrderPageProps {
  order: Order;
  currentUser: CurrentUser | null;
}

const OrderPage = ({ order, currentUser }: OrderPageProps) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest<
    MakePaymentResponse,
    MakePaymentParams
  >({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push("/orders"),
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const msLeft = new Date(order.expiresAt).getTime() - new Date().getTime();
      //TODO: format the time as "x minute, y seconds"
      setTimeLeft(Math.round(msLeft / 1000));
    };

    calculateTimeLeft();
    console.log("Stripe key: ", process.env.STRIPE_PUBLIC_KEY);
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
        email={currentUser?.email}
        stripeKey={process.env.STRIPE_PUBLIC_KEY!}
      />
      {errors}
    </div>
  );
};

OrderPage.getInitialProps = async (
  context: CustomAppContext,
  client: AxiosInstance
) => {
  const { orderId } = context.query;
  const { data }: { data: Order } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderPage;
