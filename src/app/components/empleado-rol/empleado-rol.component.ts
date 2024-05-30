import { EmpleadoService } from 'src/app/services/EmpleadoService.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-rol',
  templateUrl: './empleado-rol.component.html',
  styleUrls: ['./empleado-rol.component.scss']
})
export class EmpleadoRolComponent {
  empleadoUsuarioAgregar!: string;
  empleadoUsuarioEliminar!: string;
  rolIdAgregar!: number;
  rolIdEliminar!: number;
  roles = [
    { id: 1, nombre: 'RolAdminRRHH' },
    { id: 2, nombre: 'RolAdminArea' },
    { id: 3, nombre: 'RolEmpleado' }
  ];
  rolYaAsignado: boolean = false;

  constructor(private empleadoService: EmpleadoService) { }

  agregarRol() {
    const data = {
      empleadoUsuario: this.empleadoUsuarioAgregar,
      rolId: this.rolIdAgregar
    };
  
    this.empleadoService.guardarEmpleadoRol(this.empleadoUsuarioAgregar, this.rolIdAgregar).subscribe(response => {
      console.log('Rol agregado exitosamente', response);

        Swal.fire('Asignación exitosa', 'La asignación del rol ha sido exitosa', 'success');
      
    }, error => {
      console.error('Error al agregar el rol', error);
      Swal.fire('Error', 'Error al asignar el rol', 'error');

    });
  }
  
  eliminarRol() {
    const data = {
      empleadoUsuario: this.empleadoUsuarioEliminar,
      rolId: this.rolIdEliminar
    };

    this.empleadoService.eliminarRolEmpleado(this.empleadoUsuarioEliminar, this.rolIdEliminar).subscribe(response => {
      console.log('Rol eliminado exitosamente', response);
      Swal.fire('Eliminación exitosa', 'La eliminación del rol ha sido exitosa', 'success');

    }, error => {
      console.error('Error al eliminar el rol', error);
      Swal.fire('Error', 'Error al eliminar asignación de rol', 'error');

    });
  }
}
