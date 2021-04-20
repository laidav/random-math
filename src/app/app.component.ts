import { Component, OnInit } from '@angular/core';
import { Problem } from './models/problem';
import { Operation } from './enums/operation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent implements OnInit {
  title = 'random-math';
  private readonly numberOfProblems = 9;

  operation = Operation.Addition;
  problems: Problem[] = [];

  generateProblems() {
    this.problems = [];

    for (let i = 0; i < this.numberOfProblems; i++){
      this.problems.push(new Problem(this.operation));
    }
  }

  ngOnInit() {
    this.generateProblems();
  }
}
