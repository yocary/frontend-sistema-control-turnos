import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';
import Swal from 'sweetalert2';

interface Solicitud {
  idLicencia: number;
  tipoSol: string;
  usuario: string;
  justificacion: string;
  fechaCreacion: string;
}

@Component({
  selector: 'app-mantenimiento-usuarios',
  templateUrl: './mantenimiento-usuarios.component.html',
  styleUrls: ['./mantenimiento-usuarios.component.scss']
})
export class MantenimientoUsuariosComponent {

  solicitudes: Solicitud[] = [];

  empleados: any[] = [];
  displayedUserColumns: string[] = ['nombre', 'area', 'estado'];
  filteredEmpleados: any[] = [];

  dataSource!: MatTableDataSource<any>;

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


  usuarios = [
    { usuario: 'Usuario1', turno: 'Turno Vespertino', area: 'Ventas', estado: 'Activo' },
    { usuario: 'Usuario2', turno: 'Turno Diurno', area: 'Informática', estado: 'Inactivo' },
  ];

  displayedColumns: string[] = ['tipoSolicitud', 'adminAprobo', 'usuario', 'fecha', 'justificacion', 'opciones'];
  
  filteredUsuarios = new MatTableDataSource(this.usuarios);

  constructor(private router: Router, private empleadoService: EmpleadoService) {
    this.filteredUsuarios.filterPredicate = (data, filter: string) => {
      return data.usuario.toLowerCase().includes(filter) || 
             data.turno.toLowerCase().includes(filter) ||
             data.area.toLowerCase().includes(filter) ||
             data.estado.toLowerCase().includes(filter);
    };
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
    this.obtenerSolicitud();
  }

  onAddEmployee() {
    if (this.employee.fullName && this.employee.dpi && this.employee.area) {
      this.resetForm();
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
        this.showSolicitudesList = false;
        this.showConsultarUsuarioForm = false;
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
    const estadoSol = 'AAR';
    this.empleadoService.actualizarEstadoLicencia(estadoSol, solicitud).subscribe(
      response => {
        this.obtenerSolicitud();
      },
      error => {
      }
    );
  }

  rechazarSolicitud(solicitud: any) {
    const estadoSol = 'RAR';
    this.empleadoService.actualizarEstadoLicencia(estadoSol, solicitud).subscribe(
      response => {
        this.obtenerSolicitud();
      },
      error => {
      }
    );
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

  obtenerEmpleados() {
    this.empleadoService.obtenerEmpleados().subscribe(
      data => {
        this.empleados = data;
        this.dataSource = new MatTableDataSource(this.empleados);
      },
      error => {
        console.error('Error al obtener los empleados:', error);
      }
    );
  }

  navigateToRegister(): void {
    this.router.navigate(['/registrar-empleado']);
  }

  obtenerSolicitud() {
    this.empleadoService.obtenerSolicitudes('AAA').subscribe(data => {
      this.solicitudes = data;
    });
  }
}
