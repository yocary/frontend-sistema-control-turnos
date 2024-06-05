import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService,
    private router: Router,
  ) {
    this.marcajeForm = this.fb.group({

    });

    this.horaActual = this.obtenerHoraActual();
    setInterval(() => {
      this.horaActual = this.obtenerHoraActual();
    }, 1000); // Actualiza cada segundo
  }

  ngOnInit(): void {
    this.obtenerMarcajeActual();

  }

  ocultarInformacion(): void {
    this.mostrarInfo = false;
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
      },
      error => {
        console.error('Error al obtener el marcaje:', error);
      }
    );
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
    this.empleadoService.marcarDescanso1().subscribe(response => {
      this.obtenerMarcajeActual();
      Swal.fire('Marcaje realizado con éxito', '', 'success');
    }, error => {
      Swal.fire('Error al marcar descanso 1', 'Hubo un error al intentar marcar el descanso', 'error');
    });
  }
  
  marcarDescanso2(): void {
    this.empleadoService.marcarDescanso2().subscribe(response => {
      this.obtenerMarcajeActual();
      Swal.fire('Marcaje realizado con éxito', '', 'success');
    }, error => {
      Swal.fire('Error al marcar descanso 2', 'Hubo un error al intentar marcar el descanso', 'error');
    });
  }
  
  marcarSalida(): void {
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