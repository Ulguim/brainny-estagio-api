import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './modules/students/students.module';
import { DiciplinesModule } from './modules/diciplines/disciplines.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { ContentsModule } from './modules/contents/contents.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'brainny',
      port: 5432,
      username: 'postgres',
      password: 'unlocked',
      database: 'brainny',
      entities: ["**/modules/**/entities/*.js"],
      synchronize: true,
      logging:true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),


      

    }),
    StudentsModule,
    DiciplinesModule,
    LessonsModule,
    ContentsModule,
   

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
