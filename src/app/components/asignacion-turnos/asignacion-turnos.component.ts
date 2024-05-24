import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AsignacionTurnos } from 'src/app/models/asignacion-turnos.model';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';

@Component({
  selector: 'app-asignacion-turnos',
  templateUrl: './asignacion-turnos.component.html',
  styleUrls: ['./asignacion-turnos.component.scss']
})
export class AsignacionTurnosComponent {
  fechaInicio!: Date;
  fechaFin!: Date;
  hora!: string;
  empleado!: any;
  turno!: string;
  empleados: any[] = [];
  turnos: string[] = ['Turno 1', 'Turno 2', 'Turno 3']; // Ejemplo de lista de empleados, debes reemplazar con tus datos reales

  constructor(private router: Router, private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.obtenerEmpleados()
  }
  
  guardarAsignacion() {
    if (!this.empleado || !this.empleado.usuario) {
      console.error('Empleado no seleccionado correctamente');
      return;
    }

    const asignacionTurnos: AsignacionTurnos = {
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      usuario: this.empleado.usuario,  // Asegúrate de que `empleado` tiene el campo `usuario`
      turno: this.turno
    };

    console.log(asignacionTurnos);

    this.empleadoService.guardarAsignacionTurnos(asignacionTurnos).subscribe(
      () => {
        console.log('Asignación de turnos guardada exitosamente');
      },
      error => {
        console.error('Error al guardar la asignación de turnos:', error);
      }
    );
  }

  regresar() {
    this.router.navigate(['/']);
  }

  obtenerEmpleados() {
    this.empleadoService.obtenerEmpleados().subscribe(
      empleados => {
        this.empleados = empleados;
      },
      error => {
        console.log('Error al obtener los empleados:', error);
      }
    );
  }

  formatearFecha(fecha: Date): string {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();
    return `${dia}-${mes}-${año}`;
  }
}
