import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SistemasCalidadComponent } from './components/sistemas-calidad/sistemas-calidad.component';


const routes:Routes = [
  { path:'home', component: HomeComponent },
  { path:'contacto', component: ContactoComponent },
  { path:'productos', component:ProductosComponent },
  { path:'sistemas-calidad', component: SistemasCalidadComponent},
  { path:'**', pathMatch:'full', redirectTo:'home' }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
