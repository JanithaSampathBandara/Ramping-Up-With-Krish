import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { VehicleCreateDto } from "src/dto/input/create-vehicle.input";
import { VehicleUpdateDto } from "src/dto/input/update-vehicle.input";
import { VehicleService } from "./vehicle.service";

@Resolver()
export class VehicleResolver {

    constructor(private vehicleService: VehicleService) {}

    @Query()
    async getVehicleById(@Args('id') id: number) {
        return await this.vehicleService.getVehicleById(id);
    }

    @Query()
    async getAllVehicles(@Args('first') first: number) {
        return await this.vehicleService.getAllVehicles(first);
    }

    @Query()
    async getAllVehiclesPaginated(@Args('first') first: number, @Args('offset') offset: number) {
        return await this.vehicleService.getAllVehiclesPaginated(first, offset);
    }

 /*   @Mutation()
    async createVehicle(@Args('vehicleCreateInput') vehicleCreateDto: VehicleCreateDto) {
        return await this.vehicleService.createVehicle(vehicleCreateDto);
    } */

    @Mutation()
    //async updateVehicleById(@Args('id') id: number, @Args('firstName') firstName: string, @Args('ageOfVehicle') ageOfVehicle: number) {
    async updateVehicleById(@Args('vehicleUpdateInput') vehicleUpdateDto: VehicleUpdateDto ) {
      //  const vehicleUpdateDto: VehicleUpdateDto = { id, firstName, ageOfVehicle };
        return await this.vehicleService.updateVehicle(vehicleUpdateDto);
    }

    @Mutation()
    async deleteVehicleById(@Args('id') id: number) {
        return await this.vehicleService.deleteVehicleById(id);
    }
}