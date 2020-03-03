import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  dataSource: any = {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          // feature for Tuvansa Mexico
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [ -99.1867489, 19.5518506 ]
          },
          'properties': {
            'title': 'Tuvansa Mexico',
            "description": "Retorno de San Buenaventura 12, Fracc. Ind. San Buenaventura, Tlalnepantla, Edo. Méx. T. (55) 5039.0730, F. (55) 5039.0746. ventasmex@tuvansa.com.mx",
          }
        },
        {
          // feature for Tuvansa Monterrey
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-100.308, 25.716]
          },
          'properties': {
            'title': 'Tuvansa Monterrey',
            "description": "Guerrero Norte No. 4100, Col. del Norte, Monterrey, NL., Apdo. 2073, T. (81) 8125.4242, F. (81) 8351.4813. ventasmty@tuvansa.com.mx",
          }
        },
        {
          // feature for Tuvansa Veracruz
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-96.131, 19.173]
          },
          'properties': {
            'title': 'Tuvansa Veracruz',
            "description": "Av. Framboyanes, Lote No. 13 Cd. Industrial Bruno Pagliai Veracruz, Ver. T. (229) 989.3900, F. (229) 981.0348. javila@tuvansa.com.mx",
          }
        },
        {
          // feature for Tuvansa Mexicali
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-115.472, 32.652]
          },
          'properties': {
            'title': 'Tuvansa Mexicali',
            "description": "Blvd. Adolfo López Mateos Km. 5.5, Mexicali, B.C., México, T. (686) 557.2316, F. (686) 557.4656. ventasmli@tuvansa.com.mx",

          }
        },
        {
          // feature for Tuvansa Queretaro
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-100.388314, 20.589456]
          },
          'properties': {
            'title': 'Tuvansa Querétaro',
            "description": "Brisa No. 227 Col. Josefa Ortiz Dominguez FOVISSSTE Santiago de Queretaro, Qro. C.P. 76115 C.(55) 4114 1909 T.(442) 6425 795 mavila@tuvansa.com.mx",

          }
        },
        {
          // feature for Tuvansa Monterrey
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-100.308, 25.716]
          },
          'properties': {
            'title': 'Tuvansa Monterrey',
            "description": "Guerrero Norte No. 4100, Col. del Norte, Monterrey, NL., Apdo. 2073, T. (81) 8125.4242, F. (81) 8351.4813. ventasmty@tuvansa.com.mx",

          }
        },

      ]
    }
  }

  constructor() { }

  getDataSource(){
    return this.dataSource;
  }
}
