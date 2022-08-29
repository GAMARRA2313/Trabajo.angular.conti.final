import { Component, OnInit } from '@angular/core';
import { Note } from '../../model/Note';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   title = 'angular-noticias';
   showCardFormat = 'NACIONAL';
   titleNote = '';
   nationalNotes: Note[];
   internationalNotes: Note[];
   notes: Note[] = [
      {
         id: 1,
         picture: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max',
         title: 'Conoce acerca de fondos de inversion verdes',
         description: 'Unspecified focal traumatic brain injury with loss of consciousness of any duration with death due to other cause prior to regaining consciousness, sequela',
         date: '02/09/2021',
         reporter: 'Luiggi Gamarra',
         section: 'Invercion',
         city: 'Huancayo',
         isInternationalNote: false,
         hour: '15:00'
      },
      {
         id: 2,
         picture: 'https://source.unsplash.com/user/c_v_r/250x250',
         title: 'La portada de los libros de texto tendrán nuevo diseño',
         description: 'Transfusion associated circulatory overload',
         date: '01/06/2021',
         reporter: 'Luiggi Gamarra',
         section: 'Educación',
         city: 'Gaudalajara',
         isInternationalNote: false,
         hour: '16:00'
      },
      {
         id: 3,
         picture: 'https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=1080&fit=max',
         title: 'El museo de antropología nacional dará accesos gratis',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '28/03/2021',
         reporter: 'Luiggi Gamarra',
         section: 'Cultura',
         city: 'Ciudad de México',
         isInternationalNote: false,
         hour: '16:05'
      },
      {
         id: 4,
         picture: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&w=1500&dpr=2',
         title: 'Quentin Tarantino comienza las grabaciones en nuestro',
         description: 'Unspecified focal traumatic brain injury with loss of consciousness of any duration with death due to other cause prior to regaining consciousness, sequela',
         date: '02/09/2021',
         reporter: 'Luiggi Gamarra',
         section: 'Cine',
         city: 'Medellin',
         isInternationalNote: true,
         hour: '16:10'
      },
      {
         id: 5,
         picture: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
         title: 'Se entregarán computadoras a cada escuea del pais',
         description: 'Transfusion associated circulatory overload',
         date: '01/06/2021',
         reporter: 'Luiggi Gamarra',
         section: 'Educación',
         city: 'Santo Domingo',
         isInternationalNote: true,
         hour: '16:19'
      },
      {
         id: 6,
         picture: 'https://cdn.pixabay.com/photo/2015/03/03/05/56/avenue-656969_960_720.jpg',
         title: 'Todo un exito la exposición de culturas internacionales',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '28/03/2021',
         reporter: 'Luiggi Gamarra',
         section: 'Cultura',
         city: 'Quito',
         isInternationalNote: true,
         hour: '17:19'
      },
      {
         id: 7,
         picture: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
         title: 'Hubo sorpresas en la feria del estado',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '28/03/2021',
         reporter: 'Luiggi Gamarra',
         section: 'Cultura',
         city: 'Guadalajara',
         isInternationalNote: false,
         hour: '17:21'
      },
      {
         id: 8,
         picture: 'https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798_960_720.jpg',
         title: 'Se rehabilitan canchas para el público',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '28/03/2021',
         reporter: 'Luiggi Gamarra',
         section: 'Deportes',
         city: 'Guerrero',
         isInternationalNote: false,
         hour: '17:22'
      },
      {
         id: 9,
         picture: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max',
         title: '¡La orquesta sinfonica se presentará gratis!',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accident, initial encounter',
         date: '28/03/2021',
         reporter: 'Luiggi Gamarra',
         section: 'Cultura',
         city: 'Xalapa',
         isInternationalNote: false,
         hour: '17:23'
      }
   ];

   matchNotes: Note[] = [];
   breakingNews: Note[];

   constructor() {
      this.internationalNotes = this.notes.filter(itemNote => itemNote.isInternationalNote);
      this.nationalNotes = this.notes.filter(itemNote => !itemNote.isInternationalNote &&  itemNote.hour < '17:20');
      this.breakingNews = this.notes.filter(itemNote => itemNote.hour > '17:20');
   }

   ngOnInit(): void {
   }

   changeNoteType(format: string): void {
      this.showCardFormat = format
   }

   removeNoteList(idNote: number): void {
      this.breakingNews = this.breakingNews.filter(item => item.id !== idNote);
   }

   findNote(title: string) {
      this.matchNotes = this.notes.filter(itemNote => itemNote.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
   }

}
