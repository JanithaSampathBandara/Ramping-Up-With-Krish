import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";
import { Express } from 'express';

@Injectable()
export class FileService {
  constructor(@InjectQueue('file-upload-queue') private fileUploadQueue: Queue) {}

  async uploadFile(file: Express.Multer.File) {

    const job = await this.fileUploadQueue.add('file-upload', {
        file: file,
      }, { delay: 20000 });

   return job;
  }
  
  
}