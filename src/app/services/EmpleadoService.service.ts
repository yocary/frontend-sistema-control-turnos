import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsignacionTurnos } from '../models/asignacion-turnos.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

interface Solicitud {
  idLicencia: number;
  tipoSol: string;
  usuario: string;
  justificacion: string;
  fechaCreacion: string;
}

interface SolCambioTurno {
  idSolicitud: number;
  turnoAcutal: string;
  turnoNuevo: string;
  usuario: string;
  fecha: string;
  justificacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  

  private baseUrl = environment.api;

  constructor(private http: HttpClient) { }

  registrar(dpi: string, nombre: string, area: string, estado: string, usuario: string, contrasenia: string, turno: number, correo: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/empleado/registrar`, { dpi, nombre, area, estado, usuario, contrasenia, turno, correo });
  }


  obtenerEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/empleado`);
  }

  guardarAsignacionTurnos(asignacionTurnos: AsignacionTurnos): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/turno/guardarCambioTurno`, asignacionTurnos);
  }

  solicitarLicencia(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/solLicenciasEmpleado/guardar', data);
  }

  actualizarEstadoLicencia(estadoSol: string, idLicencia: number): Observable<any> {
    const url = `${this.baseUrl}/solLicenciasEmpleado/actualizarEstadoLicencia/${estadoSol}/${idLicencia}`;
    return this.http.post(url, null);
  }

  obtenerSolicitudes(estado: string): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(this.baseUrl + `/solLicenciasEmpleado/obtenerSolLicencias/${estado}`);
  }

  cambiarTurno(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/solCambioTurno', data);
  }

  obtenerSolCambioTurno(estado: string): Observable<SolCambioTurno[]> {
    return this.http.get<SolCambioTurno[]>(this.baseUrl + `/solCambioTurno/obtenerSolCambioTurno/${estado}`);
  }

  actualizarEstadoTurno(estadoSol: string, idSolicitud: number): Observable<any> {
    const url = `${this.baseUrl}/solCambioTurno/actualizarEstadoTurno/${estadoSol}/${idSolicitud}`;
    return this.http.post(url, null);
  }

  guardarEmpleadoRol(usuario: string, rolId: number): Observable<any> {
    const url = `${this.baseUrl}/empleadoRol/guardar/${usuario}/${rolId}`; 
    return this.http.post(url, {});
  }

  eliminarRolEmpleado(usuario: string, rolId: number): Observable<any> {
    const url = `${this.baseUrl}/empleadoRol/eliminar/${usuario}/${rolId}`;
    return this.http.delete(url);
  }

}
