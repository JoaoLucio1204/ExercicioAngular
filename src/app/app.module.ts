import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { CursosTecnicosComponent } from './cursos-tecnicos/cursos-tecnicos.component';
import { CursosGraduacaoComponent } from './cursos-graduacao/cursos-graduacao.component';
import { CursosPosGraduacaoComponent } from './cursos-pos-graduacao/cursos-pos-graduacao.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosTecnicosComponent,
    CursosGraduacaoComponent,
    CursosPosGraduacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
