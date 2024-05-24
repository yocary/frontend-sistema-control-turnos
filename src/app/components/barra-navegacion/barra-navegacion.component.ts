import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  shouldShowLogout(): boolean {
    const excludedRoutes = ['/login'];
    return !excludedRoutes.includes(this.router.url);
  }

  logout(): void {
    this.authService.logout();
  }

  matenimientoUsuarios(): void {
    this.router.navigate(['/mantenimiento-usuarios']);
  }

  asignacionTurnos(): void {
    this.router.navigate(['/asignacion-turnos']);
  }

  gestionRrhh(): void {
    this.router.navigate(['/gestion-rrhh']);
  }

  gestionesEmpleado(): void {
    this.router.navigate(['/gestiones-empleado']);
  }

  gestionSolicitudes(): void {
    this.router.navigate(['/gestion-solicitudes']);
  }

  cambioTurno(): void {
    this.router.navigate(['/cambio-turno']);
  }

}