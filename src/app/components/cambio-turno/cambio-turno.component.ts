import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambio-turno',
  templateUrl: './cambio-turno.component.html',
  styleUrls: ['./cambio-turno.component.scss']
})
export class CambioTurnoComponent implements OnInit {

  usuario!: string;
  fechaInicial!: Date;
  turnoIncial!: string
  fechaNueva!: Date;
  turnoNuevo!: string
  justificacion!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register() {

  }

  onBackToLogin() {
    this.router.navigate(['/']);
  }



}
