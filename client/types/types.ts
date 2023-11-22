import { OrderStatus } from "@blackbazar/common";

export interface CurrentUser {
  id: string;
  email: string;
  iat: string;
}

export interface Ticket {
  id: string;
  title: string;
  price: number;
  userId: string;
  version: number;
}

export interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  expiresAt: Date;
  ticket: Omit<Ticket, "userId">;
  version: number;
}

// Responses
export interface CurrentUserResponse {
  data: {
    currentUser: CurrentUser | null;
  };
}

export interface TicketsResponse {
  data: Ticket[];
}

export interface OrdersResponse {
  data: Order[];
}

export interface MakePaymentResponse {
  id: string;
}

// Params
export interface AuthParams {
  email: string;
  password: string;
}

export interface MakePaymentParams {
  orderId: string;
}

export interface OrderParams {
  ticketId: string;
}

export interface CreateTicketParams {
  title: string;
  price: string;
}
