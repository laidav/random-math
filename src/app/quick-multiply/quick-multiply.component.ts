import { Component, OnInit, HostListener } from '@angular/core';
import { Problem } from'../models/problem';

@Component({
  selector: 'app-quick-multiply',
  templateUrl: './quick-multiply.component.html',
  styleUrls: ['./quick-multiply.component.styl']
})
export class QuickMultiplyComponent implements OnInit {
  count = 0;
  max = 10;

  numberOne?: number;
  numberTwo?: number

  showAnswer = false;

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key === 'Enter')
      this.next();
  }


  constructor() { }

  generateQuestion(){
    this.numberOne = Problem.getRandomInt(this.max, 1);
    this.numberTwo = Problem.getRandomInt(10, 1);
    this.showAnswer = false;
  }

  next() {
    if(this.showAnswer) {
      this.generateQuestion();
      this.count++;
    } else {
      this.showAnswer = true;
    }
  }

  ngOnInit(): void {
    this.generateQuestion();
  }
}
