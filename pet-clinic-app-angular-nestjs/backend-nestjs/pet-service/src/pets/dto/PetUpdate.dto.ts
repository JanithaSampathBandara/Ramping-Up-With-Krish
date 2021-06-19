import { IsAlpha, IsNotEmpty, IsNumber } from "class-validator";

export class PetUpdateDto {
    pid: string;
    @IsNotEmpty()
    @IsAlpha()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    weight: number;
}