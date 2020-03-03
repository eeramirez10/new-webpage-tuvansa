import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  infos: any[] = [
    {
      text: 'Los productos de Tuvansa tienen diversas aplicaciones en la industria: Principalmente en la petrolera, petroquímica, gasera, constructora, eléctrica, minera, azucarera, hidráulica, alimenticia, papelera, farmacéutica, etc.',
      img: 'assets/images/tuvansa-productos.jpg'
    }
  ]

  productos: any [] =[
    { tipo: 'Tuberias', img:'assets/images/productos/tuberias01.jpg' },
    { tipo: 'Conexiones', img:'assets/images/productos/conexiones.jpg' },
    { tipo: 'Valvulas', img: 'assets/images/productos/valvulas.jpg' },
    { tipo: 'Tuberia y Postes PRFV', img: 'assets/images/productos/prfvp.jpg' },
    { tipo: 'Tuberias Especializadas', img: 'assets/images/productos/tuberias-especializada.jpg'},
    { tipo: 'Sistemas de Bombeo ', img: 'assets/images/productos/rociador.jpg' },
    { tipo: 'Sistemas Contra Incendios ', img: 'assets/images/productos/4.jpg' },
    { tipo: 'Tuberia y accesorios Termoplasticos', img: 'assets/images/productos/shutterstock_746739205.jpg' },
    { tipo: 'Sistemas de deteccion y alarma', img: 'assets/images/productos/shutterstock_70111435.jpg' },
    { tipo: 'Tapas y rejillas', img: 'assets/images/productos/rejilla.png' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
