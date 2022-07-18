import { CreateDisciplineInput } from './create-discipline.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDiciplineInput extends PartialType(CreateDisciplineInput) {
  @Field()
  name?:string;
}
