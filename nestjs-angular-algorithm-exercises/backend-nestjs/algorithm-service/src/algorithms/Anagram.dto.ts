import { IsNotEmpty } from "class-validator"

export class AnagramDto{

    @IsNotEmpty()
    word1: String
    @IsNotEmpty()
    word2: String

}