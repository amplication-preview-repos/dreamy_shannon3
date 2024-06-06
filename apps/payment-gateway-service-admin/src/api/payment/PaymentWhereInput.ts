import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SmsListRelationFilter } from "../sms/SmsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  smsItems?: SmsListRelationFilter;
  status?: "Option1";
  trxId?: StringNullableFilter;
};
