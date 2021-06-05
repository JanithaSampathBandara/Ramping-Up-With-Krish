import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extractor',
  templateUrl: './extractor.component.html',
  styleUrls: ['./extractor.component.scss']
})
export class ExtractorComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  private _inputSentence: string = '';
  filteredArray: string[] = [];
  validity = true;

  constructor() { }

  ngOnInit(): void {
  }

  set inputSentence(sentence: string) {
    this._inputSentence = sentence;
  }

  get inputSentence(): string {
    return this._inputSentence;
  }

  extract(): void {

      let filteredArray: string[] = [];

      filteredArray = this.inputSentence.split(' ').filter(word => word.match(/[aeiou]/gi));

      if (!filteredArray.length) {
        this.validity = false;
        this.filteredArray = filteredArray;

      } else {

        // Sorting the words inside filtered array into natural order
        for (let index = 0; index < filteredArray.length - 1; index++) {

          for (let indexIn = 0; indexIn < filteredArray.length - 1; indexIn++) {

            if (filteredArray[indexIn] > filteredArray[indexIn + 1]) {

              // Swapping the words inside filtered array
              [filteredArray[indexIn], filteredArray[indexIn + 1]] = [filteredArray[indexIn + 1], filteredArray[indexIn]];

            }
          }
        }

        this.filteredArray = filteredArray;
        this.validity = true;
    }
  }
}
