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

  ngOnInit(): void {}

  shouldShowLogout(): boolean {
    const excludedRoutes = ['/login'];
    return !excludedRoutes.includes(this.router.url);
  }

  shouldShowOptions(): boolean {
    const excludedRoutes = ['/login'];
    return !excludedRoutes.includes(this.router.url);
  }

  logout(): void {
    this.authService.logout();
  }

  navigateHome(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/inicio']);
    } else {
      this.router.navigate(['/login']);
    }
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

  empleadoRol(): void {
    this.router.navigate(['/empleado-rol']);
  }

  marcaje(): void {
    this.router.navigate(['/marcaje']);
  }

  hasRole(role: string): boolean {
    const roles = this.authService.getRoles();
    return roles.includes(role);
  }
}
