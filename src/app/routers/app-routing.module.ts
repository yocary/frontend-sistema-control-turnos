import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "../components/login/login.component";
import { MantenimientoUsuariosComponent } from '../components/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { RegistrarEmpleadoComponent } from "../components/registrar-empleado/registrar-empleado.component";
import { AuthGuard } from "../auth/auth.guard";
import { InicioComponent } from "../components/inicio/inicio.component";
import { AsignacionTurnosComponent } from "../components/asignacion-turnos/asignacion-turnos.component";
import { GestionRrhhComponent } from "../components/gestion-rrhh/gestion-rrhh.component";
import { GestionesEmpleadoComponent } from "../components/gestiones-empleado/gestiones-empleado.component";
import { GestionSolicitudesComponent } from "../components/gestion-solicitudes/gestion-solicitudes.component";
import { CambioTurnoComponent } from "../components/cambio-turno/cambio-turno.component";
import { EmpleadoRolComponent } from "../components/empleado-rol/empleado-rol.component";
import { MarcajeComponent } from "../components/marcaje/marcaje.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent, canActivate: [AuthGuard]  },
  { path: 'inicio', component: InicioComponent },
  { path: 'mantenimiento-usuarios', component: MantenimientoUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'asignacion-turnos', component: AsignacionTurnosComponent, canActivate: [AuthGuard] },
  { path: 'gestion-rrhh', component: GestionRrhhComponent, canActivate: [AuthGuard] },
  { path: 'gestiones-empleado', component: GestionesEmpleadoComponent, canActivate: [AuthGuard] },
  { path: 'gestion-solicitudes', component: GestionSolicitudesComponent, canActivate: [AuthGuard] },
  { path: 'cambio-turno', component: CambioTurnoComponent, canActivate: [AuthGuard] },
  { path: 'empleado-rol', component: EmpleadoRolComponent, canActivate: [AuthGuard] },
  { path: 'marcaje', component: MarcajeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
