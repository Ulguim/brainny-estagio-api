import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Base } from 'src/modules/base/entities/base.entity';
import { Column ,Entity} from 'typeorm';
import { FilterableField } from '@nestjs-query/query-graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';



@ObjectType('discipline')
export class DisciplineDTO  extends BaseDTO{

  
  @FilterableField()
  name:string;
}
