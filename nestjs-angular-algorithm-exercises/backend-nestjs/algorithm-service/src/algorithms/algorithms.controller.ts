import { Body, Controller, Param, Post } from '@nestjs/common';
import { AlgorithmsService } from './algorithms.service';
import { AnagramDto } from './Anagram.dto';
import { NthLargestDto } from './NthLargest.dto';
import { OccurencesDto } from './Occurences.dto';

@Controller('/services/algorithms')
export class AlgorithmsController {

    constructor(private algorithmsService: AlgorithmsService) {}

    @Post('/anagram')
    getAnagrammability(@Body() request: AnagramDto): boolean {
        return this.algorithmsService.isAnagram(request.word1, request.word2);
    }

    @Post('/occurences')
    getOccurencesCount(@Body() request: OccurencesDto): any {
        return this.algorithmsService.countOccurences(request.letterSequence);
    }

    @Post('/nth-largest')
    getNthLargestNumber(@Body() request: NthLargestDto): number {
        return this.algorithmsService.findNthLargestNumber(request.nthNumber, request.numberSequence);
    }
}
