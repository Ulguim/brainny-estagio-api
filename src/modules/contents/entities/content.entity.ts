import { ObjectType, Field, Int, extend } from '@nestjs/graphql';
import { Base } from 'src/modules/base/entities/base.entity';
import { Lesson } from 'src/modules/lessons/entities/lesson.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Content extends Base {

  @Column()
  description: string;
  
  @Column({ nullable: true })
  linkContent: string;

  @ManyToOne(() => Lesson)
  lesson: Lesson;
  // Alternativa 2
  // @Column()
  // lessonId:String
}
