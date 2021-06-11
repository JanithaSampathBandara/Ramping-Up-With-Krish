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
  result: any;

  constructor(private algorithmService: AlgorithmService) { }

  ngOnInit(): void {
  }

  async getAnagrammability(): Promise<any> {
    try {
      const anagramDto = new AnagramDto(this.word1, this.word2);
      const response = await this.algorithmService.getAnagrammability(anagramDto);
      this.result = response;
    } catch (error) {
      console.log(error);
    }
  }
}
