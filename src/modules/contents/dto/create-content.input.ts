import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateContentInput {
  @Field()
  description:string;
  @Field()
  linkContent?:string;
}
