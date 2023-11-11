import { Publisher, OrderCancelledEvent, Subjects } from "@blackbazar/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
