import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../../model/Note';

@Component({
   selector: 'app-note-detail',
   templateUrl: './note-detail.component.html',
   styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
   note: Note = {} as Note;
   notes: Note[] = [
      {
         id: 1,
         picture: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max',
         title: 'No necesitas saber economia para invertir',
         description: 'Unspecified focal traumatic brain injury with loss of consciousness of any duration with death due to other cause prior to regaining consciousness, sequela',
         date: '26/08/2022',
         reporter: 'GAMARRA LLOCLLA LUIGGI PIERO',
         section: 'finanzas',
         city: 'Invercion',
         isInternationalNote: false,
         hour: '15:00'
      },
      {
         id: 2,
         picture: 'https://source.unsplash.com/user/c_v_r/250x250',
         title: 'Libros para educacion financiera',
         description: 'Transfusion associated circulatory overload',
         date: '26/08/2022',
         reporter: 'GAMARRA LLOCLLA LUIGGI PIERO',
         section: 'finanzas',
         city: 'Huancayo',
         isInternationalNote: false,
         hour: '16:00'
      },
      {
         id: 3,
         picture: 'https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=1080&fit=max',
         title: 'Ahorrar en tiempos de inflacion',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '26/08/2022',
         reporter: 'GAMARRA LLOCLLA LUIGGI PIERO',
         section: 'ahorro',
         city: 'Huancayoo',
         isInternationalNote: false,
         hour: '16:05'
      },
      {
         id: 4,
         picture: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&w=1500&dpr=2',
         title: 'las mejores tazas para ti',
         description: 'Unspecified focal traumatic brain injury with loss of consciousness of any duration with death due to other cause prior to regaining consciousness, sequela',
         date: '26/08/2022',
         reporter: 'GAMARRA LLOCLLA LUIGGI PIERO',
         section: 'Tasas',
         city: 'Huancayo',
         isInternationalNote: true,
         hour: '16:10'
      },
      {
         id: 5,
         picture: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
         title: 'negocios rentables en la resecion ',
         description: 'Transfusion associated circulatory overload',
         date: '26/08/2022',
         reporter: 'GAMARRA LLOCLLA LUIGGI PIERO',
         section: 'negocios',
         city: 'Huancayo',
         isInternationalNote: true,
         hour: '16:19'
      },
      {
         id: 6,
         picture: 'https://cdn.pixabay.com/photo/2015/03/03/05/56/avenue-656969_960_720.jpg',
         title: 'Todo un exito en negocios internacionales',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '26/08/2022',
         reporter: 'GAMARRA LLOCLLA LUIGGI PIERO',
         section: 'negocios',
         city: 'Huancayo',
         isInternationalNote: true,
         hour: '17:19'
      },
      {
         id: 7,
         picture: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
         title: 'Creditos para invertir y conseguir la libertad',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '26/08/2022',
         reporter: 'GAMARRA LLOCLLA LUIGGI PIERO',
         section: 'creditos',
         city: 'Huancayo',
         isInternationalNote: false,
         hour: '17:21'
      },
      {
         id: 8,
         picture: 'https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798_960_720.jpg',
         title: 'ahorrar o invertir',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '26/08/2022',
         reporter: 'GAMARRA LLOCLLA LUIGGI PIERO',
         section: 'finanzas',
         city: 'Huancayo',
         isInternationalNote: false,
         hour: '17:22'
      },
      {
         id: 9,
         picture: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max',
         title: '¡La orquesta sinfonica como fondo deinvercion!',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accident, initial encounter',
         date: '26/08/2022',
         reporter: 'GAMARRA LLOCLLA LUIGGI PIERO',
         section: 'invercion',
         city: 'Huancayo',
         isInternationalNote: false,
         hour: '17:23'
      }
   ];

   constructor(
      private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
      const idNote: Number = this.route.snapshot.params.id;
      if (idNote) {
         this.note = this.notes.find(itemNote => itemNote.id == idNote)!;
      }
   }
}
