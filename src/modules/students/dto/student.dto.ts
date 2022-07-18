import { FilterableOffsetConnection, FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { DisciplineDTO } from 'src/modules/diciplines/dto/discipline.dto';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('Student')
@FilterableOffsetConnection('disciplines',()=>DisciplineDTO,{nullable:true})
export class StudentDTO  extends BaseDTO{
  

  @FilterableField()
  name:string;

  @FilterableField()
  key:string
}
