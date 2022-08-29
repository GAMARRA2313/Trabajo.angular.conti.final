import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { SwitchLanguageButtonComponent } from './switch-language-button/switch-language-button.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailComponent,
    NoteCardComponent,
    SwitchLanguageButtonComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
