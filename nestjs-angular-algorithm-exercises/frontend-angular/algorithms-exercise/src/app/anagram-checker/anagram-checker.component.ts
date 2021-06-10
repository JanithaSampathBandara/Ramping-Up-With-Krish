import { Component, OnInit } from '@angular/core';
import { AnagramDto } from '../models/Anagram.dto';
import { AlgorithmService } from '../services/algorithm.service';

@Component({
  selector: 'app-anagram-checker',
  templateUrl: './anagram-checker.component.html',
  styleUrls: ['./anagram-checker.component.scss']
})
export class AnagramCheckerComponent implements OnInit {

  word1: string;
  word2: string;
  result: boolean;

  constructor(private algorithmService: AlgorithmService) { }

  ngOnInit(): void {
  }

  getAnagrammability(): void {
    const anagramDto = new AnagramDto(this.word1, this.word2);

    this.algorithmService.getAnagrammability(anagramDto).then((data: any) => {
      this.result = data;
    }).catch((error) => {
      console.log(`Error occured : ${error}`);
    });
  }
}
