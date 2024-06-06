import { Sms } from "../sms/Sms";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  smsItems?: Array<Sms>;
  status?: "Option1" | null;
  trxId: string | null;
  updatedAt: Date;
};
