import {Injectable} from '@angular/core';
import {Http, Headers, ResponseOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import '../../rxjs/index';
import{ User } from '../../Classes/User';

@Injectable()
export class AuthService {
    private apiUrl ='http://127.0.0.1:8000/api/';
    
    constructor(private http: Http){}

    login(user: User): Observable<boolean>{
        
        let body= 'username='+user.username+ ' password='+user.password;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
        let options = new ResponseOptions({'headers':headers});
        // console.log(this.http.post(this.getUrl('get_auth_token'), body, options));
        // console.log(user.username+' este es el usuario '+user.password);
        // console.log(this.http.post(this.getUrl('get_auth_token/'), user))
        return this.http.post(this.getUrl('get_auth_token/'), user).map(this.getDatos).catch(this.error)
        }

    logout():void{
        sessionStorage.removeItem('token');
    }

    private error(error:any){
        let msg= (error.message) ? error.message: 'Error desconocido en la conexion con la Api en user';
        console.error(msg);
        return Observable.throw(msg);
    }
    
    getDatos(data: Response){
        let datos = data.json();
        console.log(data.json());
        if (datos && datos.token) {
            console.log('entra en el if');
            sessionStorage.setItem('token',datos.token);
            return true;
        }
        return false;
    }

    private getUrl(modelo:String){
        console.log(this.apiUrl+modelo);
        return this.apiUrl +modelo;
    }
}