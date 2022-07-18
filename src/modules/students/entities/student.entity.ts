import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from 'src/modules/base/entities/base.entity';
import { Discipline } from 'src/modules/diciplines/entities/discipline.entity';
import { isString, Max, MaxLength } from 'class-validator';
@Entity()
export class Student extends Base{
  
  @Column({
    length: 48,
    nullable:false
  })
  
  name:string;

  @Column({
    length: 48,
    unique:true,
  })
  key:string

 @ManyToMany(()=>Discipline, (disciplines) => disciplines.students,{onDelete:'CASCADE'})
 disciplines:Discipline[]
}

