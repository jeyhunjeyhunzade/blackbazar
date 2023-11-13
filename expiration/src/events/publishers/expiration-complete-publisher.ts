import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@blackbazar/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
