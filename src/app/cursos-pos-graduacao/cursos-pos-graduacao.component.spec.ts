import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosPosGraduacaoComponent } from './cursos-pos-graduacao.component';

describe('CursosPosGraduacaoComponent', () => {
  let component: CursosPosGraduacaoComponent;
  let fixture: ComponentFixture<CursosPosGraduacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosPosGraduacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosPosGraduacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
