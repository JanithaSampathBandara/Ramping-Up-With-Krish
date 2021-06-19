import { IsAlpha, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PetCreateDto {
    @IsNotEmpty()
    @IsAlpha()
    name: string;
    @IsNotEmpty()
    @IsAlpha()
    breed: string;
    @IsNotEmpty()
    @IsAlpha()
    color: string;
    @IsNumber()
    weight: number;
    @IsDateString()
    @IsNotEmpty()
    dob: Date;
    @IsNotEmpty()
    @IsAlpha()
    category: string;
}