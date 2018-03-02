import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OfertaComponent} from './oferta/oferta.component';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetallesComponent } from './detalles/detalles.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { AgmCoreModule } from '@agm/core';

// Servicios
import {AuthService} from './Services/auth-service/auth-service';
import {ListaPropiedadApiService} from './Services/listaPropiedadApi/listaPropiedadApi';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
  {path: '', component : CatalogoComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'oferta', component: OfertaComponent},
  {path: 'detalles/:id', component: DetallesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'registro', component: RegistroComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    OfertaComponent,
    CatalogoComponent,
    DetallesComponent,
    LoginComponent,
    PerfilComponent,
    RegistroComponent,
  ],
  imports: [
    MaterializeModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIDa1IR4XEVZ8tewBicur190GY7yMezbk'
    })
  ],
  providers: [ListaPropiedadApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
