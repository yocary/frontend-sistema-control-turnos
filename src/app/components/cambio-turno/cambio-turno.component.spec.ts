import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioTurnoComponent } from './cambio-turno.component';

describe('CambioTurnoComponent', () => {
  let component: CambioTurnoComponent;
  let fixture: ComponentFixture<CambioTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioTurnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
