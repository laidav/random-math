import { Operation } from '../enums/operation';
export class Problem {
  private readonly MAX = 100;

  top: number;
  bottom: number;
  answer: number;
  operation: Operation;

  constructor(operation: Operation) {
    this.operation = operation;
    this.top = this.getRandomInt(this.MAX);

    switch (operation) {
      case Operation.Subtraction:
        this.bottom = this.getRandomInt(this.top);
        break;
      default:
        this.bottom = this.getRandomInt(this.MAX);
    }

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
    }
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * (max  + 1));
  }
}
