import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';

@Component({
  selector: 'app-gestiones-empleado',
  templateUrl: './gestiones-empleado.component.html',
  styleUrls: ['./gestiones-empleado.component.scss']
})
export class GestionesEmpleadoComponent implements OnInit {

  usuario!: string;
  gestion!: string;
  fechaInicio!: Date;
  fechaFin!: Date;
  motivoSolicitud!: string;

  gestiones = [
    { descripcion: 'Vacaciones', valor: 'V' },
    { descripcion: 'Permiso Personal', valor: 'PP' },
    { descripcion: 'Citas al IGSS', valor: 'CI' },
    { descripcion: 'Licencia Cumpleaños', valor: 'LC' },
    { descripcion: 'Suspensión Laboral', valor: 'SL' },
    { descripcion: 'Otros', valor: 'O' }
  ];

  constructor(private router: Router, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  register() {

    const currentDate = new Date();

    const solicitud = {
      codLicencia: this.gestion,
      usuario: this.usuario,
      estadoSolicitud: 'PA',
      fechaFin: this.fechaFin,
      fechaInicio: this.fechaInicio,
      motivoSolicitud: this.motivoSolicitud,
      fechaCreacion: currentDate
    };

    this.empleadoService.solicitarLicencia(solicitud).subscribe(
      response => {
        console.log('Solicitud enviada con éxito:', response);
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
      },
      error => {
        console.error('Error al enviar la solicitud:', error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error
      }
    );
  }

  regresar(): void {
    this.router.navigate(['/inicio']);
  }
}
