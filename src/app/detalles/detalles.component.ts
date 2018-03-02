import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Propiedad } from '../propiedad';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  lat: number = 13.7161024 ;
  lng: number = -89.203469 ;
  list: Propiedad[] = [
    { id: 1, nombre: 'casa', descripcion: 'hermosa casa a la venta', broker: 'Manuel'},
    { id: 2, nombre: 'rancho', descripcion: 'bonito  rancho para juntase con putas', broker: 'Roberto'},
    { id: 3, nombre: 'casa de fiestas', descripcion: 'bonito  casa de fiestas para juntase con putas ana', broker: 'Roberto'},
    { id: 4, nombre: 'oficina', descripcion: 'bonita oficina para juntase con putas', broker: 'Roberto'},
    { id: 5, nombre: 'bonita casa', descripcion: 'bonito  rancho para juntase con putas', broker: 'Roberto'},
    { id: 6, nombre: 'bonita oficina', descripcion: 'bonito  rancho para juntase con putas', broker: 'Roberto'},
    { id: 7, nombre: 'super chulada de rancho', descripcion: 'bonito  rancho para juntase con putas', broker: 'Roberto'}
      ];
  lugar: any = {};
  id: number;
  constructor(private route: ActivatedRoute) {
    // console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    // tslint:disable-next-line:triple-equals
    this.lugar = this.list.find((lugar) => lugar.id == this.id) || null;
    }

  ngOnInit() {
  }


}
