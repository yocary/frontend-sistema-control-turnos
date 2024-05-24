import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-rrhh',
  templateUrl: './gestion-rrhh.component.html',
  styleUrls: ['./gestion-rrhh.component.scss']
})
export class GestionRrhhComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  solicitudes = [
    { usuario: 'usuario1', asistencia: 'asistencia1', horasTrabajadas: '8', deducciones: 'deduccion1', salario: 'Q. 5,000.00' },
    { usuario: 'usuario2', asistencia: 'asistencia2', horasTrabajadas: '7', deducciones: 'deduccion2', salario: 'Q. 10,000.00' },
  ];

  displayedColumns: string[] = ['usuario', 'asistencia', 'horasTrabajadas', 'deducciones', 'salario'];


  regresar(): void {
    this.router.navigate(['/inicio']);
  }

}
