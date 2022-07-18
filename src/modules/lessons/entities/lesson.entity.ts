
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Base } from 'src/modules/base/entities/base.entity';
import { Content } from 'src/modules/contents/entities/content.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Lesson extends Base {
  @Column()
  description: string;

  @OneToMany(() => Content, content => content.lesson)
  contents: Content[];
}
