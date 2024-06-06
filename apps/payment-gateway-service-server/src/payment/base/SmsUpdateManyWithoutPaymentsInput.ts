/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SmsWhereUniqueInput } from "../../sms/base/SmsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SmsUpdateManyWithoutPaymentsInput {
  @Field(() => [SmsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SmsWhereUniqueInput],
  })
  connect?: Array<SmsWhereUniqueInput>;

  @Field(() => [SmsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SmsWhereUniqueInput],
  })
  disconnect?: Array<SmsWhereUniqueInput>;

  @Field(() => [SmsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SmsWhereUniqueInput],
  })
  set?: Array<SmsWhereUniqueInput>;
}

export { SmsUpdateManyWithoutPaymentsInput as SmsUpdateManyWithoutPaymentsInput };
