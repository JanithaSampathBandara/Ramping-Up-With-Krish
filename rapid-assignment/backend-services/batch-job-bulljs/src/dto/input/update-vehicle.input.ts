import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class VehicleUpdateDto {

    @Field()
    @IsNumber()
    @IsNotEmpty()
    id: number
    
    @Field()
    firstName: string;

    @Field({ nullable: true })
    ageOfVehicle: number;
}