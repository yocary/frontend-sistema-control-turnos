import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/inicio']);
    }
  }

  login(): void {
    this.authService.authenticate(this.username, this.password)
      .subscribe(
        response => {
          // Maneja la respuesta exitosa
          localStorage.setItem('token', response.jwt);
          this.router.navigate(['/inicio']);
        },
        error => {
          // Muestra un mensaje de error utilizando Swal.fire
          Swal.fire({
            icon: 'error',
            title: 'Credenciales incorrectas',
          });
          console.error('Error during login:', error);
        }
      );
  }

}
