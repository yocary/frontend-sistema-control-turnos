import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "../components/login/login.component";
import { MantenimientoUsuariosComponent } from '../components/mantenimiento-usuarios/mantenimiento-usuarios.component';

const routes: Routes = [
  { path: "", redirectTo: "/mantenimiento-usuarios", pathMatch: "full" },


  { path: "mantenimiento-usuarios", component: MantenimientoUsuariosComponent },

  { path: "login", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
