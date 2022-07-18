import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from 'src/modules/base/entities/base.entity';
import { Discipline } from 'src/modules/diciplines/entities/discipline.entity';
@Entity()
export class Student extends Base{
  
  @Column()
  name:string;

  @Column()
  key:string

 @ManyToMany(()=>Discipline, (disciplines) => disciplines.students)
 disciplines:Discipline[]
}

