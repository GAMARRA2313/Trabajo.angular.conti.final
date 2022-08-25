import { Component } from '@angular/core';
import { Note } from 'src/models/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_anuncios';
  name: string = 'Luiggi';
  isActivate =false;
  note: Note = { title: "Titulo", description:"", date: "" }

  constructor(){
  }
}