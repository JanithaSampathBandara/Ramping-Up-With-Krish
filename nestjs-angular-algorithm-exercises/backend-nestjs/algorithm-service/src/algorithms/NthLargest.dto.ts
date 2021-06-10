import { IsNotEmpty } from "class-validator"

export class NthLargestDto {

    @IsNotEmpty()
    nthNumber: number
    @IsNotEmpty()
    numberSequence: number[]

}