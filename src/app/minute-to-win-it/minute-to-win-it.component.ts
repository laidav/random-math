import { Component, OnInit, HostListener } from '@angular/core';
import { Problem } from '../models/problem';
import { notes } from '../enums/notes';
import { Note } from '../models/note';
import { shuffle } from '../helperFunction/shuffle';

@Component({
  selector: 'app-minute-to-win-it',
  templateUrl: './minute-to-win-it.component.html',
  styleUrls: ['./minute-to-win-it.component.styl']
})
export class MinuteToWinItComponent implements OnInit {
  noteIndex = 0;
  showAnswer = false;
  notes: Note[] = [];
  done = false;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.key === 'Enter')
      this.next();
  }

  constructor() { }

  next() {
    if (this.noteIndex === this.notes.length - 1 || this.done) {
      this.showAnswer = true;
      this.done = true;
      return;
    }

    if (this.showAnswer) {
      this.showAnswer = false;
      this.noteIndex++;
    } else {
      this.showAnswer = true;
    }
  }

  reset() {
    this.noteIndex = 0;
    this.generateRandomNotes();
  }

  generateRandomNotes () {
    this.notes = shuffle(notes);
  }

  ngOnInit(): void {
    this.generateRandomNotes();
  }
}
