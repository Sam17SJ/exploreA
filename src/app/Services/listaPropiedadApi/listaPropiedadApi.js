"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("../../rxjs/index");
// import { RequestOptions } from 'https';
// import { Headers } from '@angular/http/src/headers';
var ListaPropiedadApiService = (function () {
    function ListaPropiedadApiService(http) {
        this.http = http;
        this.apiUrl = 'http://127.0.0.1:8000/api/';
    }
    ListaPropiedadApiService.prototype.getPropiedades = function () {
        return this.http.get(this.getUrl('propiedad/?format=json')).map(this.getDatos).catch(this.error);
    };
    ListaPropiedadApiService.prototype.addPropiedad = function (model) {
        console.log(this.http.post(this.getUrl('propiedad/?format=api'), model));
        return this.http.post(this.getUrl('propiedad/?format=api'), model).map(this.getDatos).catch(this.error);
    };
    ListaPropiedadApiService.prototype.removePropiedad = function (model) {
        return this.http.delete(this.getUrl('propiedad/' + model.id + '/')).catch(this.error);
    };
    ListaPropiedadApiService.prototype.updatePropiedad = function (model) {
        console.log(model);
        return this.http.put(this.getUrl('propiedad/' + model.id + '/'), model).catch(this.error);
    };
    ListaPropiedadApiService.prototype.error = function (error) {
        var msg = (error.message) ? error.message : 'Error desconocido en la conexion con la Api con propiedad';
        console.error(msg);
        return Observable_1.Observable.throw(msg);
    };
    ListaPropiedadApiService.prototype.getDatos = function (data) {
        var datos = data.json();
        console.log(datos);
        return datos || [];
    };
    ListaPropiedadApiService.prototype.getUrl = function (modelo) {
        // console.log(this.apiUrl +modelo);
        return this.apiUrl + modelo;
    };
    ListaPropiedadApiService.prototype.getOptions = function () {
        var auth = new http_1.Headers({ 'Authorization': 'Bearer ' + sessionStorage.getItem('token') });
        var options = new http_1.RequestOptions({ headers: auth });
        return options;
    };
    return ListaPropiedadApiService;
}());
ListaPropiedadApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ListaPropiedadApiService);
exports.ListaPropiedadApiService = ListaPropiedadApiService;
//# sourceMappingURL=listaPropiedadApi.js.map