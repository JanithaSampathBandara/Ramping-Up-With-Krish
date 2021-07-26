
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class VehicleCreateDto {
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vinNumber: string;
    manufacturedDate: string;
    ageOfVehicle?: number;
}

export class VehicleUpdateDto {
    id: number;
    firstName?: string;
    lastName?: string;
    email?: string;
}

export abstract class IQuery {
    abstract getVehicleById(id: number): Vehicle | Promise<Vehicle>;

    abstract getAllVehicles(first?: number): Vehicle[] | Promise<Vehicle[]>;

    abstract getAllVehiclesPaginated(first?: number, offset?: number): VehicleConnection | Promise<VehicleConnection>;
}

export class Vehicle {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vinNumber: string;
    manufacturedDate: string;
    ageOfVehicle?: number;
}

export class VehicleConnection {
    nodes?: Vehicle[];
    totalCount?: number;
}

export abstract class IMutation {
    abstract createVehicle(vehicleCreateInput: VehicleCreateDto): Vehicle | Promise<Vehicle>;

    abstract createVehicleTest(vehicleInput: VehicleCreateDto): Vehicle | Promise<Vehicle>;

    abstract updateVehicleById(vehicleUpdateInput: VehicleUpdateDto): Vehicle | Promise<Vehicle>;

    abstract deleteVehicleById(id: number): Vehicle | Promise<Vehicle>;
}
