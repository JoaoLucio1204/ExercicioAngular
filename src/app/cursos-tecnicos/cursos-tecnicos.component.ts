import { Component, Input, OnInit, Output } from '@angular/core';
import { cursosTecnicos } from 'src/modelos/cursosTecnicos';
@Component({
  selector: 'app-cursos-tecnicos',
  templateUrl: './cursos-tecnicos.component.html',
  styleUrls: ['./cursos-tecnicos.component.css']
})
export class CursosTecnicosComponent implements OnInit {

  constructor() { }
  @Input() exibeTecnicos: boolean = false
  ngOnInit(): void {
  }

  valorTecnico: string = '';

  listaTecnicos : cursosTecnicos[] = [
    { nome: 'Informática', duracao: 1.5},
    { nome: 'Administração', duracao: 1.5},
    { nome: 'Logística', duracao: 1.5},
    { nome: 'RH', duracao: 1.5},
    { nome: 'Vendas', duracao: 1.5},
  ]

  maisInformacoes(){
    this.valorTecnico = 'Próximas turmas em agosto de 2022'
  }

}
