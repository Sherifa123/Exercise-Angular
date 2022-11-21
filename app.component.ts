import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // isClearDisabled = true;
  // numberChosen = 1;
  // numbers = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  //   41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  // ];
  // calculate(divisibleBy: number) {
  //   this.numberChosen = divisibleBy;
  //   if (divisibleBy === 1) {
  //     this.isClearDisabled = true;
  //   } else {
  //     this.isClearDisabled = false;
  //   }
  // }
  constructor() {}

  ngOnInit(): void {}

  // courseName = 'Angular';
  // text = '';
  // receiveMessage(value: any) {
  //   this.text = value;
  // }
  colors = ['Black', 'White', 'Blue', 'Purple', 'Red', 'Green'];
  fruits = ['Banana', 'Watermelon', 'Berry', 'Papaya', 'Rasperies', 'Guava'];
  animals = ['Bear', 'White Safari', 'Bats', 'Parrot', 'Rabbit', 'Giraffe'];
  display: any;
  search(a: any) {
    if (a == 'colors') {
      this.display = this.colors;
    } else if (a == 'animals') {
      this.display = this.animals;
    } else if (a == 'fruits') {
      this.display = this.fruits;
    }
  }
}
