import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertUtils } from '../utils/alert-utils';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      console.log(err);

      if ([401, 403].includes(err.status)) {
        // Borra el token y redirige al usuario al inicio de sesión solo si es un error 401 o 403.
        this.authService.logout();
        this.router.navigate(["/login"]);
        AlertUtils.showToast(
          "error",
          `No tienes los permisos suficientes para poder realizar esta acción.`
        );
      }

      // Devuelve el error para que se pueda manejar en otros lugares si es necesario.
      return throwError(err)
    }));
  }
}
