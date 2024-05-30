import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoRolComponent } from './empleado-rol.component';

describe('EmpleadoRolComponent', () => {
  let component: EmpleadoRolComponent;
  let fixture: ComponentFixture<EmpleadoRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
