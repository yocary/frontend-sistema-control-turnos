import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-solicitudes',
  templateUrl: './gestion-solicitudes.component.html',
  styleUrls: ['./gestion-solicitudes.component.scss']
})
export class GestionSolicitudesComponent implements OnInit {

  showSolicitudesList: boolean = false;
  showSolicitudesTurno: boolean = false;

  solicitudes = [
    { tipoSolicitud: 'Vacaciones', adminAprobo: 'Admin1', usuario: 'Usuario1', fecha: '01/04/2024', justificacion: 'Vacaciones', opciones: '' },
    { tipoSolicitud: 'Licencia de cumpleaños', adminAprobo: 'Admin2', usuario: 'Usuario2', fecha: '15/05/2024', justificacion: 'Cumpleaños', opciones: '' },
  ];

  solicitudesTurnos = [
    { turnoActual: 'Matutino', turnoCambiar: 'Vespertino', usuario: 'Usuario1', fecha: '01/04/2024', justificacion: 'Capacitación', opciones: '' },
    { turnoActual: 'Diurno', turnoCambiar: 'Matutino', usuario: 'Usuario2', fecha: '15/05/2024', justificacion: 'Salud', opciones: '' },
  ];

  displayedColumns: string[] = ['tipoSolicitud', 'adminAprobo', 'usuario', 'fecha', 'justificacion', 'opciones'];
  displayedColumnsTurnos: string[] = ['turnoActual', 'turnoCambiar', 'usuario', 'fecha', 'justificacion', 'opciones'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresarGestiones() {
    this.showSolicitudesList = false;
    this.showSolicitudesTurno = false;
  }

  onBackToLogin() {
    this.router.navigate(['/']);
  }

  aprobarSolicitud(solicitud: any) {

  }

  rechazarSolicitud(solicitud: any) {
    
  }


}
