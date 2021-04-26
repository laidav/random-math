import { Component, OnInit } from '@angular/core';
import { Problem } from '../models/problem';
import { Operation } from '../enums/operation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
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
