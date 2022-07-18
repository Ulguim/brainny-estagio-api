import { ObjectType, Field, Int, extend, } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { Base } from 'src/modules/base/entities/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { LessonDTO } from 'src/modules/lessons/dto/lesson.dto';
import { UpdateLessonInput } from 'src/modules/lessons/dto/update-lesson.input';

@ObjectType('Content')
@FilterableRelation('lesson',()=>LessonDTO)
export class ContentDTO extends BaseDTO{
  
  @FilterableField()
  description:string;
  @FilterableField({nullable:true})
  linkContent:string;

}
