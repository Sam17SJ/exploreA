import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Propiedad} from '../Classes/Propiedad';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ListaPropiedadApiService} from '../Services/listaPropiedadApi/listaPropiedadApi'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent {
  lat: number = 13.7161024;
  lng: number = -89.203469;
  model: Propiedad;
  @Output() onsubmit= new EventEmitter<any>();
  public rutas:Array<string>=[];


  constructor(private http: Http,
    private servicio:ListaPropiedadApiService) { }

  public submit(){
    this.onsubmit.emit(this.model);
}

  public onArchivoSeleccionado($event:any) {
    if ($event.target.files.length === 1) {
        this.subirArchivo($event.target.files[0]).subscribe(response => {
            // respuesta
            let b:string[];
            b=response.split('"');

            this.rutas.push("/"+b[1]);
            console.log(b[1]);
            this.model.imagen=this.rutas;
            console.log(this.model.imagen)
        },
        error => {
            console.error(error);
        });
    }
  }


  public subirArchivo(file:any): Observable<string> {
    let formData = new FormData();
    formData.append('img', file);
    // formData.append('fileName', file.name);
    const url = "http://127.0.0.1:8000/api/imagen/"; //destino en el servidor
    const headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, formData, options).map(response => response.text());
  }

  guardar(model:Propiedad){
        this.servicio.addPropiedad(model).subscribe(data =>{
         
          // console.log(model.img+' imagen')
        });
        // console.log(model.img+' MANDE')
        // this.propiedades.push(model); }).catch(e => console.log(e));
  }

  ngOnInit() {
  }

}
