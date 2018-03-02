import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../Services/auth-service/auth-service';
import {User} from '../Classes/User';

@Component({
  moduleId:module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User =new User();
     error='';
     loading: boolean=false;
     

    constructor(
        // private router: Router,
        private authenticationsService: AuthService
    ) {}

    ngOnInit(){
        this.authenticationsService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationsService.login(this.model)
            .subscribe( result => {
                if( result=== true){
                    // this.router.navigate(['/']);
                }
                else {
                    this.error= 'Credenciales incorrectas';
                    this.loading=false;
                }
            }, e=>{
                this.error='Credenciales incorectas 2';
                this.loading=false;
                
            });
    }


}
