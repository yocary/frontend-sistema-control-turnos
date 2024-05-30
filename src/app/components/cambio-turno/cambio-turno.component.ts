import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';

@Component({
  selector: 'app-cambio-turno',
  templateUrl: './cambio-turno.component.html',
  styleUrls: ['./cambio-turno.component.scss']
})
export class CambioTurnoComponent implements OnInit {

  usuario!: string;
  fechaInicial: | null = null;
  turnoInicial!: string
  fechaNueva: | null = null;
  turnoNuevo!: string
  justificacion!: string;

  constructor(private router: Router,  private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  register() {
    const data = {
      estado: 'PAT',
      fechaSolicitud: new Date(),
      fechaTurnoInicial: this.fechaInicial,
      fechaTurnoNuevo: this.fechaNueva,
      idSolicitud: 0,
      justificacion: this.justificacion,
      turnoInicial: this.turnoInicial,
      turnoNuevo: this.turnoNuevo,
      usuario: this.usuario
    };

    this.empleadoService.cambiarTurno(data).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.router.navigate(['/inicio']);
      },
      (error) => {
        console.error('Error al enviar la solicitud:', error);
      }
    );
  }

  onBackToLogin() {
    this.router.navigate(['/']);
  }

  limpiarCampos() {
    this.usuario = '';
    this.fechaInicial = null;
    this.turnoInicial = '';
    this.fechaNueva = null;
    this.turnoNuevo = '';
    this.justificacion = '';
  }


}
