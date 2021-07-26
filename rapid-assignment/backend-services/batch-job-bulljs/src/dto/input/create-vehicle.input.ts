import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export class VehicleCreateDto {

    @Field()
    @IsNotEmpty()
    firstName: string;

    @Field()
    @IsNotEmpty()
    lastName: string;

    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    carMake: string;

    @Field()
    @IsNotEmpty()
    carModel: string;

    @Field()
    @IsNotEmpty()
    vinNumber: string;

    @Field()
    @IsNotEmpty()
    manufacturedDate: string;

    @Field()
    ageOfVehicle: number;
}


