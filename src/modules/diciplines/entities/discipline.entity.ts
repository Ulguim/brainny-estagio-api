import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Base } from 'src/modules/base/entities/base.entity';
import { Column ,Entity} from 'typeorm';

@Entity()
export class Discipline  extends Base{
  @Column()
  name:string;
}
