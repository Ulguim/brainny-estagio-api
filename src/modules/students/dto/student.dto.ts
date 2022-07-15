import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('student')
export class StudentDTO  extends BaseDTO{
  

  @FilterableField()
  name:string;

  @FilterableField()
  key:string
}
