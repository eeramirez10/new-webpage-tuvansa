import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SliderComponent } from './components/shared/slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SistemasCalidadComponent } from './components/sistemas-calidad/sistemas-calidad.component';

import { AnimateOnScrollModule } from "ng2-animate-on-scroll";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    ProductosComponent,
    ContactoComponent,
    SistemasCalidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   AnimateOnScrollModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
