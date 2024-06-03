import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';
import { AsignacionTurnos } from 'src/app/models/asignacion-turnos.model';

@Component({
  selector: 'app-asignacion-turnos',
  templateUrl: './asignacion-turnos.component.html',
  styleUrls: ['./asignacion-turnos.component.scss']
})
export class AsignacionTurnosComponent implements OnInit {
  form: FormGroup;
  empleados: any[] = [];

  constructor(
    private router: Router,
    private empleadoService: EmpleadoService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      fechaInicio: [''],
      fechaFin: [''],
      empleado: [''],
      turno: ['']
    });
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  guardarAsignacion(): void {
    if (!this.form.value.empleado || !this.form.value.empleado.usuario) {
      Swal.fire('Seleccione un empleado', '', 'warning');
      return;
    }

    const asignacionTurnos: AsignacionTurnos = {
      fechaInicio: this.form.value.fechaInicio,
      fechaFin: this.form.value.fechaFin,
      usuario: this.form.value.empleado.usuario,
      turno: this.form.value.turno
    };

    this.empleadoService.guardarAsignacionTurnos(asignacionTurnos).subscribe(
      () => {
        Swal.fire('Asignación exitosa', 'Asignación creada con éxito', 'success');
        this.router.navigate(['/inicio']);
      },
      error => {
        Swal.fire('Error', 'Error al crear asignación', 'error');
        console.error('Error al guardar la asignación de turnos:', error);
      }
    );
  }

  regresar(): void {
    this.router.navigate(['/']);
  }

  obtenerEmpleados(): void {
    this.empleadoService.obtenerEmpleados().subscribe(
      empleados => {
        this.empleados = empleados;
      },
      error => {
      }
    );
  }
}
