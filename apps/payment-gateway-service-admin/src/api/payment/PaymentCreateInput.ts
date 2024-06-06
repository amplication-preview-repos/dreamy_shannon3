import { SmsCreateNestedManyWithoutPaymentsInput } from "./SmsCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  amount?: number | null;
  smsItems?: SmsCreateNestedManyWithoutPaymentsInput;
  status?: "Option1" | null;
  trxId?: string | null;
};
