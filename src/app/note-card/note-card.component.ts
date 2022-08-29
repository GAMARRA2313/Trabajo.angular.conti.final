import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() section = '';
  @Input() date = '';
  @Input() city = '';
  @Input() idNote = 0;
  @Input() picture = '';
  constructor() { }

  ngOnInit(): void {
  }

}
