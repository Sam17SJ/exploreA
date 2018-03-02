import { Component, OnInit, Input } from '@angular/core';
//import { Propiedad } from '../propiedad';
import {Propiedad} from '../Classes/Propiedad';
import {ListaPropiedadApiService} from '../Services/listaPropiedadApi/listaPropiedadApi'



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
  })


export class CatalogoComponent implements OnInit {
  propiedades: Array<Propiedad>=[];
  // list: Propiedad[] = [
  //   { id: 1, nombre: 'casa', descripcion: 'hermosa casa a la venta', broker: 'Manuel'},
  //   { id: 2, nombre: 'rancho', descripcion: 'bonito  rancho para juntase con putas', broker: 'Roberto'},
  //   { id: 3, nombre: 'casa de fiestas', descripcion: 'bonito  casa de fiestas para juntase con putas', broker: 'Roberto'},
  //   { id: 4, nombre: 'oficina', descripcion: 'bonita oficina para juntase con putas', broker: 'Roberto'},
  //   { id: 5, nombre: 'bonita casa', descripcion: 'bonito  rancho para juntase con putas', broker: 'Roberto'},
  //   { id: 6, nombre: 'bonita oficina', descripcion: 'bonito  rancho para juntase con putas', broker: 'Roberto'},
  //   { id: 7, nombre: 'super chulada de rancho', descripcion: 'bonito  rancho para juntase con putas', broker: 'Roberto'}
  //     ];
  //  nombrePropiedad: String;

  // url: String = 'https://images01.olx-st.com/ui/55/54/47/48/t_1511400897_0dac4e3f695ab8cbe51ee8babec7f49a.jpg';
  // url3: String = 'http://espaciolujo.com/wp-content/uploads/2012/10/coina-olimpic.jpg';
  // url2: String = 'https://www.decorablog.com/wp-content/2012/11/Las-casas-mas-caras-del-mundo-2.jpg';
  // url4: String = 'http://www.hostalabadia.com/wp-content/uploads/10876871.jpg';
  // url5: String = 'https://i.pinimg.com/originals/27/48/37/27483730504e918f67cf1339b95364fe.jpg';

  constructor(private servicio: ListaPropiedadApiService){}

  ngOnInit(){
      this.servicio.getPropiedades().subscribe(data =>{
        this.propiedades=data;
      });
    }
 

    // constructor() { }

}
