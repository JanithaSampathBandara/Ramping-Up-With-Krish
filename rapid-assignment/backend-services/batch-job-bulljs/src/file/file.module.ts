import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/entities/vehicle.entity';
import { FileController } from './file.controller';
import { FileProcessor } from './file.processor';
import { FileService } from './file.service'; 

@Module({
    imports: [
      BullModule.registerQueue({
        name: 'file-upload-queue'
      }),
      MulterModule.register({
        dest: './upload',
      }),
      TypeOrmModule.forFeature([Vehicle])
    ],
    controllers: [FileController],
    providers: [FileService, FileProcessor],
  })
export class FileModule {}
