import { SmsUpdateManyWithoutPaymentsInput } from "./SmsUpdateManyWithoutPaymentsInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  smsItems?: SmsUpdateManyWithoutPaymentsInput;
  status?: "Option1" | null;
  trxId?: string | null;
};
