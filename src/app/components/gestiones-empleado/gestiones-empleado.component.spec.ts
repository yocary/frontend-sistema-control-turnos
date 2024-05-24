import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionesEmpleadoComponent } from './gestiones-empleado.component';

describe('GestionesEmpleadoComponent', () => {
  let component: GestionesEmpleadoComponent;
  let fixture: ComponentFixture<GestionesEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionesEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionesEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
