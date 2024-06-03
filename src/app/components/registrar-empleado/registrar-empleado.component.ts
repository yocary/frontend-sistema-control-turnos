import { Router } from '@angular/router';
import { EmpleadoService } from './../../services/EmpleadoService.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.scss']
})
export class RegistrarEmpleadoComponent {

  dpi: any;
  nombre: any;
  area: any;
  estado: any;
  usuario: any;
  contrasenia: any;
  turno: any;
  correo: any;

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  registrar(): void {
    this.empleadoService.registrar(this.dpi, this.nombre, this.area, this.estado, this.usuario, this.contrasenia, this.turno, this.correo)
      .subscribe(response => {
        Swal.fire('Éxito', 'Se creo correctamente', 'success');
        this.router.navigate(['/inicio']);
      }, error => {
        console.error('Error al registrar empleado:', error);
        Swal.fire('Error', 'Ha ocurrido un error al registrar el empleado', 'error');
      });
  }
  
  
  regresar(): void {
    this.router.navigate(['/mantenimiento-usuarios']);
  }
}
