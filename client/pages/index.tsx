import { AxiosInstance } from "axios";
import { AppContext } from "next/app";
import Link from "next/link";

import { CurrentUser, Ticket, TicketsResponse } from "types/types";

interface LandingPageProps {
  currentUser: CurrentUser | null;
  tickets: Ticket[];
}

const LandingPage = ({ currentUser, tickets }: LandingPageProps) => {
  const ticketList = tickets?.map((ticket) => (
    <tr key={ticket.id}>
      <td>{ticket.title}</td>
      <td>{ticket.price}</td>
      <td>
        <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
          View
        </Link>
      </td>
    </tr>
  ));
  return (
    <div>
      <h2>Tickets</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (
  context: AppContext,
  client: AxiosInstance,
  currentUser: CurrentUser | null
) => {
  const { data }: TicketsResponse = await client.get("/api/tickets");

  return { tickets: data };
};

export default LandingPage;
