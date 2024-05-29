import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {

  private baseUrl = environment.api; // Ajusta la URL base según tu backend

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/authenticate`, { username, password })
      .pipe(
        tap((response: { jwt: string; }) => {
          // Guarda el token JWT en el almacenamiento local
          localStorage.setItem('token', response.jwt);
          // Decodifica el token para extraer los roles y otros detalles
          const decodedToken = this.decodeToken(response.jwt);
          if (decodedToken) {
            localStorage.setItem('roles', JSON.stringify(decodedToken.roles));
          }
        })
      );
  }

  private decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Error decoding token', e);
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  hasRole(role: string): boolean {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles).includes(role) : false;
  }

  getRoles(): string[] {
    const rolesString = localStorage.getItem('roles');
    return rolesString ? JSON.parse(rolesString) : [];
  }
}
