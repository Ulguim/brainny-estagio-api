import { InputType, Int, Field } from '@nestjs/graphql';
import { UpdateLessonInput } from 'src/modules/lessons/dto/update-lesson.input';
@InputType()
export class CreateContentInput {
  @Field()
  description:string;
  @Field()
  linkContent?:string;

  // Alternativa 1
  @Field(()=> UpdateLessonInput)
  lesson?: UpdateLessonInput;

  // lessonID:string
}
