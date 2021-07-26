import { Get, Post, UploadedFile } from "@nestjs/common";
import { UseInterceptors } from "@nestjs/common";
import { Body, Controller } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileService } from "./file.service";

@Controller('file')
export class FileController {

    constructor(private fileService: FileService){}

    /*@Post()
    uploadFile(@Body() file: Express.Multer.File): void {
        this.fileService.uploadFile(file);
    }
    */

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('uploaded file', file);
    return this.fileService.uploadFile(file);
    }
    
    @Get()
    hello() {
        return "janz";
    }
}