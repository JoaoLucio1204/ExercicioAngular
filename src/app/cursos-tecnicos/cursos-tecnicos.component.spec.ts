import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosTecnicosComponent } from './cursos-tecnicos.component';

describe('CursosTecnicosComponent', () => {
  let component: CursosTecnicosComponent;
  let fixture: ComponentFixture<CursosTecnicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosTecnicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
