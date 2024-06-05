import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routers/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app-component/app.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ScrollSpyDirective } from './directives/scroll-spy/scroll-spy.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MantenimientoUsuariosComponent } from './components/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AsignacionTurnosComponent } from './components/asignacion-turnos/asignacion-turnos.component';
import { GestionRrhhComponent } from './components/gestion-rrhh/gestion-rrhh.component';
import { GestionesEmpleadoComponent } from './components/gestiones-empleado/gestiones-empleado.component';
import { GestionSolicitudesComponent } from './components/gestion-solicitudes/gestion-solicitudes.component';
import { CambioTurnoComponent } from './components/cambio-turno/cambio-turno.component';
import { JwtInterceptor } from './interceptors/JwtInterceptor.intercerptor';
import { SpinnerService } from './services/spinner.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { EmpleadoRolComponent } from './components/empleado-rol/empleado-rol.component';
import { DatePipe } from '@angular/common';
import { MarcajeComponent } from './components/marcaje/marcaje.component';

const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScrollSpyDirective,
    LoginComponent,
    MantenimientoUsuariosComponent,
    RegistrarEmpleadoComponent,
    BarraNavegacionComponent,
    InicioComponent,
    AsignacionTurnosComponent,
    GestionRrhhComponent,
    GestionesEmpleadoComponent,
    GestionSolicitudesComponent,
    CambioTurnoComponent,
    SpinnerComponent,
    EmpleadoRolComponent,
    MarcajeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule
  ],
  providers: [
    DatePipe,
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }  // Añade el SpinnerInterceptor aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
