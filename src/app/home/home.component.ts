import { Component, OnInit } from '@angular/core';
import { cursosTecnicos } from 'src/modelos/cursosTecnicos';
import { CursosTecnicosComponent } from '../cursos-tecnicos/cursos-tecnicos.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  exibeTecnicos: boolean = false;
  exibeCursosGraduacao: boolean = false;
  exibeCursosPosGraduacao: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  exibeTecnico(){
    this.exibeTecnicos = true;
    this.exibeCursosGraduacao = false;
    this.exibeCursosPosGraduacao = false;
  }

  exibeGraduacao(){
    this.exibeTecnicos = false;
    this.exibeCursosGraduacao = true;
    this.exibeCursosPosGraduacao = false;

  }

  exibePosGraduacao(){
    this.exibeCursosPosGraduacao = true;
    this.exibeCursosGraduacao = false;
  this.exibeTecnicos = false
  }


}
