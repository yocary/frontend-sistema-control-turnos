import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Marcaje } from 'src/app/models/marcaje.model';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marcaje',
  templateUrl: './marcaje.component.html',
  styleUrls: ['./marcaje.component.scss']
})
export class MarcajeComponent implements OnInit {
  marcajeForm: FormGroup;
  marcaje!: Marcaje; 
  horaActual: string;
  mostrarFormulario: boolean = false;
  mostrarInfo = false;
  esTarde: boolean = false;

  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService,
    private router: Router,
  ) {
    this.marcajeForm = this.fb.group({});

    this.horaActual = this.obtenerHoraActual();
    setInterval(() => {
      this.horaActual = this.obtenerHoraActual();
    }, 1000); 
  }

  ngOnInit(): void {
    this.obtenerMarcajeActual();
  }

  ocultarInformacion(): void {
    this.mostrarInfo = false;
    this.obtenerMarcajeActual();
  }

  mostrarInformacion(): void {
    this.mostrarInfo = true;
    this.obtenerMarcajeActual();
  }

  obtenerHoraActual(): string {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  }

  obtenerMarcajeActual(): void {
    this.empleadoService.obtenerMarcajes().subscribe(
      marcaje => {
        this.marcaje = marcaje;
        this.verificarSiEsTarde();
      },
      error => {
        console.error('Error al obtener el marcaje:', error);
      }
    );
  }

  verificarSiEsTarde(): void {
    if (this.marcaje && this.marcaje.horaEntrada) {
      const [horas, minutos] = this.marcaje.horaEntrada.split(':').map(Number);
      if (horas > 8 || (horas === 8 && minutos > 0)) {
        this.esTarde = true;
      } else {
        this.esTarde = false;
      }
    } else {
      this.esTarde = false;
    }
  }
  

  marcarEntrada(): void {
    this.empleadoService.marcarEntrada().subscribe(response => {
      this.obtenerMarcajeActual();
      Swal.fire('Marcaje realizado con éxito', '', 'success');
    }, error => {
      Swal.fire('Error al marcar entrada', 'Hubo un error al intentar marcar la entrada', 'error');
    });
  }
  
  marcarDescanso1(): void {
    if (!this.marcaje?.horaEntrada) {
      Swal.fire('Advertencia', 'Debe marcar la entrada antes de registrar el descanso.', 'warning');
      return;
    }
    this.empleadoService.marcarDescanso1().subscribe(response => {
      this.obtenerMarcajeActual();
      Swal.fire('Marcaje realizado con éxito', '', 'success');
    }, error => {
      Swal.fire('Error al marcar descanso', 'Hubo un error al intentar marcar el descanso', 'error');
    });
  }
  
  marcarDescanso2(): void {
    if (!this.marcaje?.horaEntrada) {
      Swal.fire('Advertencia', 'Debe marcar la entrada antes de registrar el descanso.', 'warning');
      return;
    }
    if (!this.marcaje?.horaDescanso1) {
      Swal.fire('Advertencia', 'Debe marcar el primer descanso antes de registrar el segundo descanso.', 'warning');
      return;
    }
    this.empleadoService.marcarDescanso2().subscribe(response => {
      this.obtenerMarcajeActual();
      Swal.fire('Marcaje realizado con éxito', '', 'success');
    }, error => {
      Swal.fire('Error al marcar descanso', 'Hubo un error al intentar marcar el descanso', 'error');
    });
  }
  
  
  marcarSalida(): void {
    if (!this.marcaje?.horaEntrada) {
      Swal.fire('Advertencia', 'Debe marcar la entrada antes de registrar la salida.', 'warning');
      return;
    }
    if (!this.marcaje?.horaDescanso1) {
      Swal.fire('Advertencia', 'Debe marcar el primer descanso antes de registrar la salida.', 'warning');
      return;
    }
    if (!this.marcaje?.horaDescanso2) {
      Swal.fire('Advertencia', 'Debe marcar el segundo descanso antes de registrar la salida.', 'warning');
      return;
    }
    this.empleadoService.marcarSalida().subscribe(response => {
      this.obtenerMarcajeActual();
      Swal.fire('Marcaje realizado con éxito', '', 'success');
    }, error => {
      Swal.fire('Error al marcar salida', 'Hubo un error al intentar marcar la salida', 'error');
    });
  }

  regresar(): void {
    this.router.navigate(['/inicio']);
  }
}
