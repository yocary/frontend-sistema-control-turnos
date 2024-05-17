import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mantenimiento-usuarios',
  templateUrl: './mantenimiento-usuarios.component.html',
  styleUrls: ['./mantenimiento-usuarios.component.scss']
})
export class MantenimientoUsuariosComponent {
  showAddEmployeeForm: boolean = false;
  showSolicitudesList: boolean = false;
  showConsultarUsuarioForm: boolean = false;

  employee = {
    fullName: '',
    dpi: '',
    area: '',
    shift: '',
    usuario: '',
    status: 'active'
  };

  solicitudes = [
    { tipoSolicitud: 'Vacaciones', adminAprobo: 'Admin1', usuario: 'Usuario1', fecha: '01/04/2024', justificacion: 'Vacaciones', opciones: '' },
    { tipoSolicitud: 'Licencia de cumpleaños', adminAprobo: 'Admin2', usuario: 'Usuario2', fecha: '15/05/2024', justificacion: 'Cumpleaños', opciones: '' },
  ];

  usuarios = [
    { usuario: 'Usuario1', turno: 'Turno Vespertino', area: 'Ventas', estado: 'Activo' },
    { usuario: 'Usuario2', turno: 'Turno Diruno', area: 'Informática', estado: 'Inactivo' },
  ];

  displayedColumns: string[] = ['tipoSolicitud', 'adminAprobo', 'usuario', 'fecha', 'justificacion', 'opciones'];
  displayedUserColumns: string[] = ['nombre', 'turno', 'area', 'estado'];
  filteredUsuarios = new MatTableDataSource(this.usuarios);

  constructor(private router: Router) {
    this.filteredUsuarios.filterPredicate = (data, filter: string) => {
      return data.usuario.toLowerCase().includes(filter) || 
             data.turno.toLowerCase().includes(filter) ||
             data.area.toLowerCase().includes(filter) ||
             data.estado.toLowerCase().includes(filter);
    };
  }
  onAddEmployee() {
    if (this.employee.fullName && this.employee.dpi && this.employee.area) {
      this.resetForm();
      this.showAddEmployeeForm = false; 
    } else {
    }
  }

  onSaveEmployee() {
    Swal.fire({
      title: '¿Está seguro de agregar el empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.showAddEmployeeForm = false;
        this.showSolicitudesList = false;
        Swal.fire(
          'Guardado',
          'El empleado ha sido guardado.',
          'success'
        );
      } else {
      }
    });
  }

  onBack() {
    this.showAddEmployeeForm = false;
    this.showSolicitudesList = false;
    this.showConsultarUsuarioForm = false;
  }

  onBackToLogin() {
    this.router.navigate(['/']);
  }

  resetForm() {
    this.employee = {
      fullName: '',
      dpi: '',
      area: '',
      shift: '',
      usuario: '',
      status: 'active'
    };
  }

  showSolicitudes() {
    this.showSolicitudesList = true;
  }

  aprobarSolicitud(solicitud: any) {

  }

  rechazarSolicitud(solicitud: any) {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredUsuarios.filter = filterValue;
  }
}
