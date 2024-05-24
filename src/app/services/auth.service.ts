import { Injectable } from "@angular/core";
import { GeneralService } from "./general.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Router } from "@angular/router";

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


        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
