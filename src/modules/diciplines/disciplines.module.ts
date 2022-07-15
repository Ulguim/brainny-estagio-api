import { Module } from '@nestjs/common';


import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql'; 
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { DisciplineDTO } from './dto/discipline.dto';
import { Discipline } from './entities/discipline.entity';
import { CreateDisciplineInput } from './dto/create-discipline.input';
import { UpdateDiciplineInput } from './dto/update-discipline.input';

@Module({
  imports: [NestjsQueryGraphQLModule.forFeature({
    // import the NestjsQueryTypeOrmModule to register the entity with typeorm      
    // and provide a QueryService      
    imports: [NestjsQueryTypeOrmModule.forFeature([Discipline])],      // describe the resolvers you want to expose      
    resolvers: [{
      DTOClass: DisciplineDTO,
      EntityClass: Discipline,
      CreateDTOClass:CreateDisciplineInput,
      UpdateDTOClass:UpdateDiciplineInput,
      enableTotalCount:true,
      pagingStrategy: PagingStrategies.OFFSET,

    }],
  }),],


  providers: []
})
export class DiciplinesModule {}
