/*import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { VehicleService } from "./vehicle.service";


@Controller('vehicles')
export class VehicleController {
     msg: any;

constructor(private vehicleService: VehicleService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  sendCsvToBullService(@UploadedFile() file: Express.Multer.File): any {
      console.log('gtttt');
     this.vehicleService.sendCsvToBullService(file);
  }

  @Get()
  message() {
      
      this.vehicleService.test().subscribe((msg) => {
          console.log(msg);
          this.msg = msg;
          
      })
      return this.msg;
  }
}
*/