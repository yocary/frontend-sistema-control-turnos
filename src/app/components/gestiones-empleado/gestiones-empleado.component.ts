import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestiones-empleado',
  templateUrl: './gestiones-empleado.component.html',
  styleUrls: ['./gestiones-empleado.component.scss']
})
export class GestionesEmpleadoComponent implements OnInit {

  showGestionVacaciones: boolean = false;
  showGestionesEmpleado: boolean = false;

  usuario!: string;
  gestion!: string;
  fechaInicio!: Date;
  fechaFin!: Date;
  motivoSolicitud!: string;
  gestiones: string[] = ['Gestión 1', 'Gestión 2', 'Gestión 3']; // Lista de gestiones


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register() {

  }

  regresar(): void {
    this.router.navigate(['/inicio']);
  }

  regresarGestiones() {
    this.showGestionVacaciones = false;
    this.showGestionesEmpleado = false;
  }

}
