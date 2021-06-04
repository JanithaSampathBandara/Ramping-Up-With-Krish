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

      this.filteredArray = this.inputSentence.split(' ').filter(word => word.match(/[aeiou]/gi)).sort();

      if (!this.filteredArray.length) {
        this.validity = false;
      }
      else {
        this.validity = true;
      }

  }
}
