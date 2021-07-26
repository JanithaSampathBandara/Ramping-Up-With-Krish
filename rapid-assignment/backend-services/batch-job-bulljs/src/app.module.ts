import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { FileModule } from './file/file.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FileModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'automobile',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      logging: false
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
