import { Subjects, Publisher, PaymentCreatedEvent } from "@blackbazar/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
