import { Module } from '@nestjs/common';

import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql'; import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { StudentDTO } from './dto/student.dto';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Module({
  imports: [NestjsQueryGraphQLModule.forFeature({
    // import the NestjsQueryTypeOrmModule to register the entity with typeorm      
    // and provide a QueryService      
    imports: [NestjsQueryTypeOrmModule.forFeature([Student])],      // describe the resolvers you want to expose      
    resolvers: [{
      DTOClass: StudentDTO,
      EntityClass: Student,
      CreateDTOClass:CreateStudentInput,
      UpdateDTOClass:UpdateStudentInput,
      enableTotalCount:true,
      pagingStrategy: PagingStrategies.OFFSET,

    }],
  }),],


  providers: []
})
export class StudentsModule { }
