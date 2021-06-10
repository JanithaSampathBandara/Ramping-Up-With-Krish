import { IsNotEmpty } from "class-validator";

export class OccurencesDto {
    @IsNotEmpty()
    letterSequence: string
}