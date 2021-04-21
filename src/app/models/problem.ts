import { Operation } from '../enums/operation';
export class Problem {
  private readonly MAX = 100;

  top: number;
  bottom: number;
  answer: number;
  operation: Operation;

  constructor(operation: Operation) {
    this.operation = operation;

    switch (operation) {
      case Operation.Subtraction:
        this.top = this.getRandomInt(this.MAX, 10);
        this.bottom = this.getRandomInt(this.top);
        break;
      default:
        this.top = this.getRandomInt(this.MAX);
        this.bottom = this.getRandomInt(this.MAX);
    };

    switch (operation) {
      case Operation.Addition:
        this.answer = this.top + this.bottom;
        break;
      case Operation.Subtraction:
        this.answer = this.top - this.bottom;
        break;
      case Operation.Multiplication:
        this.answer = this.top * this.bottom;
        break;
    };
  }

  private getRandomInt(max: number, min: number = 0) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
