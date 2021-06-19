import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [PetsModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'pet',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    logging: false
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
