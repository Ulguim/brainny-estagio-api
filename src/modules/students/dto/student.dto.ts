import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('student')
export class StudentDTO {
  @Field()
  id:string;

  @FilterableField()

  name:string;

  @FilterableField()
  key:string
}
