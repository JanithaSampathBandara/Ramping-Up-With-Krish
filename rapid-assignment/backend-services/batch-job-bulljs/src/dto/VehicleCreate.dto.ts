import { IsAlpha, IsNotEmpty, IsNumber } from "class-validator";
import { isNullableType } from "graphql";

export class VehicleCreateDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsAlpha()
    firstName: string;

    @IsNotEmpty()
    @IsAlpha()
    lastName: string;

    @IsNotEmpty()
    @IsAlpha()
    email: string;

    @IsNotEmpty()
    carMake: string;

    @IsNotEmpty()
    carModel: string;

    @IsNotEmpty()
    vinNumber: string;

    @IsNotEmpty()
    manufacturedDate: string;

    @IsNumber()
    ageOfVehicle: number;
}