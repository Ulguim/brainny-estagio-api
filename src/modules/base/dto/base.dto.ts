
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';

@ObjectType('base')
export class BaseDTO {
    @Field()
    id:string;
  
    @FilterableField()
    createdAt: Date;
  
    @Field()
    updatedAt: Date;
  
  
    @Field()
    deletedAt: Date;
  }
  