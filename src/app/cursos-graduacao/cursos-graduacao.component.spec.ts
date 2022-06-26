import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosGraduacaoComponent } from './cursos-graduacao.component';

describe('CursosGraduacaoComponent', () => {
  let component: CursosGraduacaoComponent;
  let fixture: ComponentFixture<CursosGraduacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosGraduacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosGraduacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
