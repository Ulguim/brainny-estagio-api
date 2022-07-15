import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from 'src/modules/base/entities/base.entity';
@Entity()
export class Student extends Base{
  
  @Column()
  name:string;

  @Column()
  key:string
}
