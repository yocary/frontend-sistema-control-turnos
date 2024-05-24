import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRrhhComponent } from './gestion-rrhh.component';

describe('GestionRrhhComponent', () => {
  let component: GestionRrhhComponent;
  let fixture: ComponentFixture<GestionRrhhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionRrhhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
