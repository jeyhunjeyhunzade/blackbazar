import { AxiosInstance } from "axios";
import { AppContext } from "next/app";

import { Order, OrdersResponse } from "/types/types";

interface MyOrdersPageProps {
  orders: Order[];
}

const MyOrdersPage = ({ orders }: MyOrdersPageProps) => {
  return (
    <ul>
      {orders?.map((order) => (
        <li key={order.id}>
          {order.ticket.title} - {order.status}
        </li>
      ))}
    </ul>
  );
};

MyOrdersPage.getInitialProps = async (
  context: AppContext,
  client: AxiosInstance
) => {
  const { data }: OrdersResponse = await client.get("/api/orders");

  return { orders: data };
};

export default MyOrdersPage;
