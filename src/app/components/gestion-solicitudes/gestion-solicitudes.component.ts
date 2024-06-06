import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';

interface Solicitud {
  idLicencia: number;
  tipoSol: string;
  usuario: string;
  justificacion: string;
  fechaCreacion: string;
}

interface SolCambioTurno {
  idSolicitud: number;
  turnoAcutal: string;
  turnoNuevo: string;
  usuario: string;
  fecha: string;
  justificacion: string;
}

@Component({
  selector: 'app-gestion-solicitudes',
  templateUrl: './gestion-solicitudes.component.html',
  styleUrls: ['./gestion-solicitudes.component.scss']
})
export class GestionSolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = [];
  solicitudesCambioTurno: SolCambioTurno[] = [];
  displayedColumns: string[] = ['tipoSolicitud', 'adminAprobo', 'usuario', 'fecha', 'justificacion', 'opciones'];


  showSolicitudesList: boolean = false;
  showSolicitudesTurno: boolean = false;

  displayedColumnsTurnos: string[] = ['turnoActual', 'turnoCambiar', 'usuario', 'fecha', 'justificacion', 'opciones'];

  constructor(private router: Router, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerSolicitud();
    this.obtenerSolCambioTurno();
  }

  regresarGestiones() {
    this.showSolicitudesList = false;
    this.showSolicitudesTurno = false;
  }

  onBackToLogin() {
    this.router.navigate(['/']);
  }

  aprobarSolicitud(solicitud: any) {// se envian los estados para el micro
    const estadoSol = 'AAA';
    this.empleadoService.actualizarEstadoLicencia(estadoSol, solicitud).subscribe(
      response => {
        this.regresarGestiones();
      },
      error => {
      }
    );
  }

  rechazarSolicitud(solicitud: any) {
    const estadoSol = 'RAA';// 
    this.empleadoService.actualizarEstadoLicencia(estadoSol, solicitud).subscribe(
      response => {
        this.regresarGestiones();
      },
      error => {
      }
    );
  }

  obtenerSolicitud() {
    this.empleadoService.obtenerSolicitudes('PA').subscribe(data => {
      this.solicitudes = data;
    });
  }

  obtenerSolCambioTurno() {
    this.empleadoService.obtenerSolCambioTurno('PAT').subscribe(data => {//se obtienen las solicitudes que tengan ese estado
      this.solicitudesCambioTurno = data;
    });
  }

  aprobarSolicitudTurno(solicitud: any) {
    const estadoSol = 'TA';
    this.empleadoService.actualizarEstadoTurno(estadoSol, solicitud).subscribe(
      response => {
        this.regresarGestiones();
      },
      error => {
      }
    );
  }

  rechazarSolicitudTurno(solicitud: any) {
    const estadoSol = 'TR';
    this.empleadoService.actualizarEstadoTurno(estadoSol, solicitud).subscribe(
      response => {
        this.regresarGestiones();
      },
      error => {
      }
    );
  }

}
