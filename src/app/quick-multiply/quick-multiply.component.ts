import { Component, OnInit } from '@angular/core';
import { Problem } from'../models/problem';

@Component({
  selector: 'app-quick-multiply',
  templateUrl: './quick-multiply.component.html',
  styleUrls: ['./quick-multiply.component.styl']
})
export class QuickMultiplyComponent implements OnInit {
  min = 1;
  max = 10;

  numberOne?: number;
  numberTwo?: number

  numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ];

  generateQuestion(){
    this.numberOne = Problem.getRandomInt(this.max, this.min);
    this.numberTwo = Problem.getRandomInt(this.max, this.min);
  }

  constructor() { }

  ngOnInit(): void {
    this.generateQuestion();
  }
}
