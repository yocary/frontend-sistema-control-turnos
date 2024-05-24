import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsignacionTurnos } from '../models/asignacion-turnos.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseUrl = environment.api; // Ajusta la URL base según tu backend

  constructor(private http: HttpClient) { }

  register(dpi: string, nombre: string, area: string, estado: string, usuario: string, contrasenia: string, turno: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/empleado/publico/register`, { dpi, nombre, area, estado, usuario, contrasenia, turno });
  }


  obtenerEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/empleado`);
  }

  guardarAsignacionTurnos(asignacionTurnos: AsignacionTurnos): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/turno/guardarCambioTurno`, asignacionTurnos);
  }

}
