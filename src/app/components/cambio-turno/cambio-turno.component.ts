import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';

@Component({
  selector: 'app-cambio-turno',
  templateUrl: './cambio-turno.component.html',
  styleUrls: ['./cambio-turno.component.scss']
})
export class CambioTurnoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private empleadoService: EmpleadoService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      fechaInicial: [''],
      turnoInicial: [''],
      fechaNueva: [''],
      turnoNuevo: [''],
      justificacion: ['']
    });
  }

  ngOnInit(): void {}

  register(): void {
    const solicitud = {
      estado: 'PAT',
      fechaSolicitud: new Date(),
      fechaTurnoInicial: this.form.value.fechaInicial,
      fechaTurnoNuevo: this.form.value.fechaNueva,
      idSolicitud: 0,
      justificacion: this.form.value.justificacion,
      turnoInicial: this.form.value.turnoInicial,
      turnoNuevo: this.form.value.turnoNuevo
    };
  
    this.empleadoService.cambiarTurno(solicitud).subscribe(
      response => {
        Swal.fire('Éxito', 'Cambio de turno solicitado con éxito', 'success');
        this.router.navigate(['/inicio']);
      },
      error => {
        console.error('Error al enviar la solicitud:', error);
        Swal.fire('Error', 'Error al solicitar el cambio de turno', 'error');
      }
    );
  }

  limpiarCampos(): void {
    this.form.reset();
  }

  onBackToLogin(): void {
    this.router.navigate(['/']);
  }
}
