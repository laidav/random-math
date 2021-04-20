import { Component, Input } from '@angular/core';
import { Problem } from '../models/problem';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.styl']
})
export class ProblemComponent {
 @Input() problem?: Problem;

  constructor() { }
}
