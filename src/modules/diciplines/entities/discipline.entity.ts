import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Base } from 'src/modules/base/entities/base.entity';
import { Column ,Entity, JoinTable} from 'typeorm';
import { Student } from 'src/modules/students/entities/student.entity';
import { ManyToMany } from 'typeorm';
@Entity()
export class Discipline  extends Base{
  @Column()
  name:string;

  @ManyToMany(()=>Student, (students)=> students.disciplines,)
   @JoinTable()
  students:Student[];
}
