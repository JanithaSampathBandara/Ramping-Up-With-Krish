import { HttpModule, Module } from '@nestjs/common';
//import { VehicleController } from './vehicle.controller';
import { VehicleResolver } from './vehicle.resolver';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [HttpModule],
  providers: [VehicleService, VehicleResolver],
//  controllers: [VehicleController]
})
export class VehicleModule {}
