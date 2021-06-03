import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {

  result = 0;
  validity = true;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  calculateFibonacci(userInput: any): number{

    let answer = 0;
    if (userInput <= 0) {
      this.validity = false;
    }
    else if (userInput <= 2) {
      this.validity = true;
      this.result = 1;
    }
    else {
      this.validity = true;
      let firstNumber = 1;
      let secondNumber = 1;

      for (let index = 0; index < userInput - 2; index++) {
        answer = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = answer;
      }
      this.result = answer;
    }
    return this.result;
  }

  // tslint:disable-next-line:typedef
  onKeyPress() {
    this.result = 0;
    this.validity = true;
  }


}
