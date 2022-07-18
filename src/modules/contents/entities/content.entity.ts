import { ObjectType, Field, Int, extend } from '@nestjs/graphql';
import { Base } from 'src/modules/base/entities/base.entity';
import { Lesson } from 'src/modules/lessons/entities/lesson.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Content extends Base {

  @Column({
    length: 250
    

  })
  description: string;

  @Column({
    nullable: true,
    length: 45
  })
  linkContent: string;

  @ManyToOne(() => Lesson,)
  lesson: Lesson;

  @Column({ nullable: true })
  lessonId: String
}
