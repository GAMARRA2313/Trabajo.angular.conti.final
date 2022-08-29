import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() isclicked = false;
  @Input() title = '';
  @Input() hour = '';
  @Input() section = '';
  @Input() city = '';
  @Input() idNote = 0;
  @Output() removeItem = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  remove(): void {
    this.removeItem.emit(this.idNote);
  }

}
