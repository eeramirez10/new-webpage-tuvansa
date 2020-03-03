import { Component, OnInit } from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import { environment } from '../../../environments/environment';
import { MapService } from '../../services/map.service';

let config: any = {
  'id': 'points',
  'type': 'symbol',
  'source': 'points',
  'layout': {
    // get the icon name from the source's "icon" property
    // concatenate the name to get an icon from the style's sprite sheet
    'icon-image': 'sucursal',
    // get the title name from the source's "title" property
    /*     'text-field': ['get', 'title'],
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.9], */
    'text-anchor': 'top',
    'icon-size': 0.25,
    'icon-allow-overlap': true
  }
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  mapa: mapboxgl.Map;
  mapbox = (mapboxgl as typeof mapboxgl )
  infos: any[] = [
    {
      text: '',
      img: 'assets/images/contact-us.jpg'
    }
  ]
  constructor( private mapService:MapService) { 
    
  }

  ngOnInit() {

    this.mapbox.accessToken = environment.mapboxKey
    this.mapa = new mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-101.4841658, 24.4085383], // starting position [lng, lat]
      zoom:3.9 // starting zoom
    });

    this.mapa.on('load', ()=> {
      
      this.cargaImagen()
            .then( (image:any) => {
                      this.mapa.addImage('sucursal', image)
            })
            .catch( err => console.log(err))
    
      this.mapa.addSource('points', this.mapService.getDataSource() );

      this.mapa.addLayer(config);
    });
    // disable map zoom when using scroll
    this.mapa.scrollZoom.disable();
    // Add zoom and rotation controls to the this.mapa.
    this.mapa.addControl(new mapboxgl.NavigationControl());

    this.popUp()
  }


  //functions
  cargaImagen =  ()=>{
    return new Promise ((resolve,reject)=>{
      this.mapa.loadImage('assets/images/icon-map.png', (err, image) => {
        if (err) reject (err);
        resolve (image);
      })
    })
  }

  popUp(){
    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false });

    this.mapa.on('mouseenter', 'points', (e) => {
      this.mapa.getCanvas().style.cursor = 'pointer';
      var coordinates = e.features[0].geometry['coordinates'].slice();
      var description = e.features[0].properties.description;
      var title = e.features[0].properties.title;
      var text = ` <strong>${title}</strong>  
                      <p>${description} </p>
        `;
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      popup
        .setLngLat(coordinates)
        .setHTML(text)
        .addTo(this.mapa)
        
    });

    this.mapa.on('mouseleave', 'points', () => {
      this.mapa.getCanvas().style.cursor = '';
      popup.remove();
    })
  }

}
