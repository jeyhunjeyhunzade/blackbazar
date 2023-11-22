import Router from "next/router";
import { AppContext } from "next/app";
import { AxiosInstance } from "axios";

import { useRequest } from "hooks/useRequest";
import { Order, OrderParams, Ticket } from "types/types";

interface CustomAppContext extends AppContext {
  query: {
    ticketId: string;
  };
}

interface TicketPageProps {
  ticket: Ticket;
}

const TicketPage = ({ ticket }: TicketPageProps) => {
  const { doRequest, errors } = useRequest<Order, OrderParams>({
    url: "/api/orders",
    method: "post",
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) =>
      Router.push("/orders/[orderId]", `/orders/${order.id}`),
  });

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h4>Price: {ticket.price}</h4>
      {errors}
      <button className="btn btn-primary" onClick={() => doRequest()}>
        Purchase
      </button>
    </div>
  );
};

TicketPage.getInitialProps = async (
  context: CustomAppContext,
  client: AxiosInstance
) => {
  const { ticketId } = context.query;
  const { data }: { data: Ticket } = await client.get(
    `/api/tickets/${ticketId}`
  );

  return { ticket: data };
};

export default TicketPage;
