import { Component, OnInit } from '@angular/core';
import { Problem } from './models/problem';
import { Operation } from './enums/operation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'random-math';

  ngOnInit() {
    const problem = new Problem(Operation.Subtraction);
    console.log(problem);
  }
}
