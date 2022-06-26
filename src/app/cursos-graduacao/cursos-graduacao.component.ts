import { Component, OnInit } from '@angular/core';
import { cursosGraduacao } from 'src/modelos/cursosGraduacao';
import { Input } from '@angular/core';
@Component({
  selector: 'app-cursos-graduacao',
  templateUrl: './cursos-graduacao.component.html',
  styleUrls: ['./cursos-graduacao.component.css']
})
export class CursosGraduacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  valorGraduacao: string = '';

  maisInformacoes(){
    this.valorGraduacao = 'Os cursos de graduação terão edital próprio';
  }
  @Input() exibeCursosGraduacao: boolean = false

  listaGraduacao: cursosGraduacao[] = [
    {
      nome: 'Engenharia de Computação', duracao: 5, tipo: 'Bacharelado'
    },

    {
      nome: 'Engenharia de Controle e Automação', duracao: 5, tipo: 'Bacharelado'
    },

    {
      nome: 'Pedagogia', duracao: 4, tipo: 'Licenciatura'
    },

    {
      nome: 'Educação Física', duracao: 4, tipo: 'Licenciatura'
    },

    {
      nome: 'Psicologia', duracao: 5, tipo: 'Bacharelado'
    }

  ]

}
