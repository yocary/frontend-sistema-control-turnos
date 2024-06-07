import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';

@Component({
  selector: 'app-gestiones-empleado',
  templateUrl: './gestiones-empleado.component.html',
  styleUrls: ['./gestiones-empleado.component.scss']
})
export class GestionesEmpleadoComponent implements OnInit {

  gestion!: string;
  fechaInicio!: Date;
  fechaFin!: Date;
  motivoSolicitud!: string;
  form: FormGroup;

  gestiones = [
    { descripcion: 'Vacaciones', valor: 'V' },
    { descripcion: 'Permiso Personal', valor: 'PP' },
    { descripcion: 'Citas al IGSS', valor: 'CI' },
    { descripcion: 'Licencia Cumpleaños', valor: 'LC' },
    { descripcion: 'Suspensión Laboral', valor: 'SL' },
    { descripcion: 'Otros', valor: 'O' }
  ];

  constructor(
    private router: Router,
    private empleadoService: EmpleadoService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      usuario: [''],
      gestion: [''],
      fechaInicio: [''],
      fechaFin: [''],
      motivoSolicitud: ['']
    });
  }

  ngOnInit(): void {
  }

  register(): void {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

    const solicitud = {
      codLicencia: this.form.value.gestion,
      estadoSolicitud: 'PA',
      fechaFin: this.form.value.fechaFin,
      fechaInicio: this.form.value.fechaInicio,
      motivoSolicitud: this.form.value.motivoSolicitud
    };
  
    this.empleadoService.solicitarLicencia(solicitud).subscribe(
      response => {
        Swal.fire('Éxito', 'Gestión creada con éxito', 'success');
        this.router.navigate(['/inicio']);

      },
      error => {
        console.error('Error al enviar la solicitud:', error);
        Swal.fire('Error', 'Error al crear la gestión', 'warning');
      }
    );
  }
  

  regresar(): void {
    this.router.navigate(['/inicio']);
  }

}
