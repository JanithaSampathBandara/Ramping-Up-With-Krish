import { Component, OnInit } from '@angular/core';
import { OccurencesDto } from '../models/Occurences.dto';
import { AlgorithmService } from '../services/algorithm.service';

@Component({
  selector: 'app-occurences-counter',
  templateUrl: './occurences-counter.component.html',
  styleUrls: ['./occurences-counter.component.scss']
})
export class OccurencesCounterComponent implements OnInit {

  inputSentence: string;
  result: any;

  constructor(private algorithmService: AlgorithmService) { }

  ngOnInit(): void {
  }

  getOccurencesCount(): void {
    const promise = new Promise((resolve, reject) => {
      const occurencesDto = new OccurencesDto(this.inputSentence);
      const response = this.algorithmService.getOccurencesCount(occurencesDto).toPromise();
      console.log('in promise', response);
      resolve(response);
    });
    promise.then((data: object) => {
      console.log(data);
      this.result = Object.entries(data);
    }).catch((error) => {
      console.log(`Error Occured ${error}`);
    });
  }
}
