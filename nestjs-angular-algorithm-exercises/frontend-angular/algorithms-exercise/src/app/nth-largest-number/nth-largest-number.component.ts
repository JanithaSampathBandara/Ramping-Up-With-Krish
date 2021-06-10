import { Component, OnInit } from '@angular/core';
import { NthLargestDto } from '../models/NthLargest.dto';
import { AlgorithmService } from '../services/algorithm.service';

@Component({
  selector: 'app-nth-largest-number',
  templateUrl: './nth-largest-number.component.html',
  styleUrls: ['./nth-largest-number.component.scss']
})
export class NthLargestNumberComponent implements OnInit {

  nthNumber: number;
  numberSequence: string;
  formattedNumberSequence: number[];
  result: number;

  constructor(private algorithmService: AlgorithmService) { }

  ngOnInit(): void {
  }

  formatNumberSequence(numberSequence: string, callback): void {

    // tslint:disable-next-line:radix
    this.formattedNumberSequence = numberSequence.split(',').map((element) => parseInt(element));
    callback(this.formattedNumberSequence);
  }

  getNthLargestNumber(): void {
    this.formatNumberSequence(this.numberSequence, (formattedSequence) => {
      const nthLargestDto = new NthLargestDto(this.nthNumber, formattedSequence);
      this.algorithmService.getNthLargestNumber(nthLargestDto).subscribe((data: any) => {
        this.result = data;
      });
    });
  }
}
