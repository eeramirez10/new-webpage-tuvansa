import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: Date = new Date();
  anioTuvansaFundacion: any = 1956;
  tuvansasExperienceYears: any = this.date.getFullYear() - this.anioTuvansaFundacion;

  infos: any[] = [
    {
      text: 'Somos una empresa orgullosamente mexicana con mas de cinco decadas de experencia',
      img: 'assets/images/pipes-869692.jpg'
    },
    {
      text: 'TENEMOS AMPLIA EXPERENCIA EN LA COMERCIALIZACION DE TUBERIAS, VALVULAS Y CONEXIONES PARA USO INDUSTRIAL',
      img: 'assets/images/Tuvansa-1.jpg'
    },
    {
      text: 'Lorem ipsum ',
      img: 'assets/images/pipes-869692.jpg'
    }
  ]
  constructor(){
   
  }

  ngOnInit() {
  }

}
