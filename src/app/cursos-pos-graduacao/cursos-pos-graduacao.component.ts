import { Component, OnInit } from '@angular/core';
import { cursosPosGraduacao } from 'src/modelos/cursosPosGraduacao';
import { Input } from '@angular/core';
@Component({
  selector: 'app-cursos-pos-graduacao',
  templateUrl: './cursos-pos-graduacao.component.html',
  styleUrls: ['./cursos-pos-graduacao.component.css']
})
export class CursosPosGraduacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() exibeCursosPosGraduacao = false;

  valor: string = '';
  listaPosGraduacao: cursosPosGraduacao[] = [
    {curso: "Segurança de Sistemas", duracao: 2},
    {curso: "Direito Digital", duracao: 2},
    {curso: "Data Science", duracao: 2},
    {curso: "MBA em Controle e Automação", duracao: 2},
    {curso: "Gerência de Projetos", duracao: 2},
  ]

  maisInformacoes(){
      this.valor= "Inscrições em Breve!!! Aguarde";
  }
}
