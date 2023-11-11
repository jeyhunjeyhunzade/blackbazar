import { Publisher, OrderCreatedEvent, Subjects } from "@blackbazar/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
