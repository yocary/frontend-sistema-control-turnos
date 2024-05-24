import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routers/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app-component/app.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ScrollSpyDirective } from './directives/scroll-spy/scroll-spy.directive';

import { RequestInterceptor } from "./interceptors/request.interceptor";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MantenimientoUsuariosComponent } from './components/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AsignacionTurnosComponent } from './components/asignacion-turnos/asignacion-turnos.component';
import { GestionRrhhComponent } from './components/gestion-rrhh/gestion-rrhh.component';
import { GestionesEmpleadoComponent } from './components/gestiones-empleado/gestiones-empleado.component';
import { GestionSolicitudesComponent } from './components/gestion-solicitudes/gestion-solicitudes.component';
import { CambioTurnoComponent } from './components/cambio-turno/cambio-turno.component';


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
    NgbModule,

    ServiceWorkerModule.register('sw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
