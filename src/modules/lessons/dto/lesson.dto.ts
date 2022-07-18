
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { Base } from 'src/modules/base/entities/base.entity';
import { Column ,Connection,Entity, OneToMany} from 'typeorm';
import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { ContentsModule } from 'src/modules/contents/contents.module';
import { Content } from 'src/modules/contents/entities/content.entity';
import { ContentDTO } from 'src/modules/contents/dto/content.dto';
@ObjectType('lesson')
@FilterableOffsetConnection('Content',()=> ContentDTO,{nullable:true})
export class LessonDTO  extends BaseDTO{
  @FilterableField({nullable:true})
  description:string;

  
}
