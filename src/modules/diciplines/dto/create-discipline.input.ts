import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDisciplineInput {
  @Field()
  name:string;
}
