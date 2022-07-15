import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql'; 
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { LessonDTO } from './dto/lesson.dto';
import { Lesson } from './entities/lesson.entity';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
@Module({
  imports: [NestjsQueryGraphQLModule.forFeature({
    // import the NestjsQueryTypeOrmModule to register the entity with typeorm      
    // and provide a QueryService      
    imports: [NestjsQueryTypeOrmModule.forFeature([Lesson])],      // describe the resolvers you want to expose      
    resolvers: [{
      DTOClass: LessonDTO,
      EntityClass: Lesson,
      CreateDTOClass:CreateLessonInput,
      UpdateDTOClass:UpdateLessonInput,
      enableTotalCount:true,
      pagingStrategy: PagingStrategies.OFFSET,

    }],
  }),],


  providers: []
})
export class LessonsModule {}
