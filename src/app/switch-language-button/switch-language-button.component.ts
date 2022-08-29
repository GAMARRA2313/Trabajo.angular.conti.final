import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch-language-button',
  templateUrl: './switch-language-button.component.html',
  styleUrls: ['./switch-language-button.component.scss']
})
export class SwitchLanguageButtonComponent implements OnInit {
  @Input() text = '';
  @Input() test = '';
  @Output() emitInformation: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeViewFormat(value: string): void {
    this.emitInformation.emit(value);
  }
}
