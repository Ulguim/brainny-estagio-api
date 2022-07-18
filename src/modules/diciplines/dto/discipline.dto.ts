import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Base } from 'src/modules/base/entities/base.entity';
import { Column ,Entity} from 'typeorm';
import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { StudentDTO } from 'src/modules/students/dto/student.dto';



@ObjectType('discipline')
@FilterableOffsetConnection('students',()=>StudentDTO,{nullable:true})

export class DisciplineDTO  extends BaseDTO{

  
  @FilterableField()
  name:string;
}
