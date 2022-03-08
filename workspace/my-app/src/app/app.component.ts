import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  oneOrZero = 1;
  twoOrZero = 2;
  threeOrZero = 3;
  fourOrZero = 4;
  fiveOrZero = 5;
  sixOrZero = 6;
  sevenOrZero = 7;
  eightOrZero = 8;
  nineOrZero = 9;

  constructor() {}

  changeToZero(num: string) {
    switch(num) {
      case '1': {
        this.oneOrZero = this.oneOrZero === 1 ? 0 : 1;
        break;
      }
      case '2': {
        this.twoOrZero = this.twoOrZero === 2 ? 0 : 2;
        break;
      }  
      case '3': {
        this.threeOrZero = this.threeOrZero === 3 ? 0 : 3;
        break;
      }
      case '4': {
        this.fourOrZero = this.fourOrZero === 4 ? 0 : 4;
        break;
      }
      case '5': {
        this.fiveOrZero = this.fiveOrZero === 5 ? 0 : 5;
        break;
      }
      case '6': {
        this.sixOrZero = this.sixOrZero === 6 ? 0 : 6;
        break;
      }
      case '7': {
        this.sevenOrZero = this.sevenOrZero === 7 ? 0 : 7;
        break;
      }
        case '8': {
        this.eightOrZero = this.eightOrZero === 8 ? 0 : 8;
        break;
      }
        case '9': {
        this.nineOrZero = this.nineOrZero === 9 ? 0 : 9;
        break;
      }
      
    }

  }

  factorial(num: number) {
    let fact = 1;
    for(let i=num; i > 0; i--) {
      fact = fact*i;
    }
    return fact;
  }
 

}
