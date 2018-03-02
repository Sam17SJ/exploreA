import {Injectable} from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import '../../rxjs/index';
import{ Propiedad } from '../../Classes/Propiedad';
// import { RequestOptions } from 'https';
// import { Headers } from '@angular/http/src/headers';

@Injectable()
export class ListaPropiedadApiService{
    private apiUrl ='http://127.0.0.1:8000/api/';

    constructor(private http: Http){}

    getPropiedades(): Observable<Propiedad[]>{
        return this.http.get(this.getUrl('propiedad/?format=json')).map(this.getDatos).catch(this.error);
    }

    addPropiedad(model: Propiedad): Observable<Propiedad>{
        return this.http.post(this.getUrl('propiedad/?format=api'), model).map(this.getDatos).catch(this.error);
    }

    removePropiedad(model: Propiedad){
        return this.http.delete(this.getUrl('propiedad/'+model.id+'/')).catch(this.error);
    }

    updatePropiedad(model: Propiedad){
        console.log(model);
        return this.http.put(this.getUrl('propiedad/'+model.id+'/'), model).catch(this.error);
    }

    getPropiedad(id:number ):Observable<Propiedad>{
        return this.http.get(this.getUrl('propiedad/'+id+'/')).map(this.getDatos).catch(this.error);
    }

    private error(error:any){
        let msg= (error.message) ? error.message: 'Error desconocido en la conexion con la Api con propiedad';
        console.error(msg);
        return Observable.throw(msg);
    }

    getDatos(data: Response){
        let datos = data.json();
        console.log(datos);
        return datos || [];
    }

    private getUrl(modelo:String){
        // console.log(this.apiUrl +modelo);
        return this.apiUrl +modelo;
    }

    private getOptions(): RequestOptions {
        let auth = new Headers({'Authorization':'Bearer '+sessionStorage.getItem('token')});
        let options =new RequestOptions({ headers: auth });
        return options;
    }
}