import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import { VehicleModule } from './vehicle/vehicle.module';
import { join } from 'path';


@Module({
  imports: [
    VehicleModule,
    GraphQLModule.forRoot({
      typePaths:['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/vehicle/graphql.ts'),
        outputAs: 'class',
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
