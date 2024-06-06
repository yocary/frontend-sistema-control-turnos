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
    this.authService.authenticate(this.username.trim(), this.password)
      .subscribe(
        response => {
          localStorage.setItem('token', response.jwt);
          this.router.navigate(['/inicio']);
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Credenciales incorrectas',
          });
        }
      );
  }

}
