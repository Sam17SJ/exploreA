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
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.apiUrl = 'http://127.0.0.1:8000/api/';
    }
    AuthService.prototype.login = function (user) {
        var body = 'username=' + user.username + ' password=' + user.password;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.ResponseOptions({ 'headers': headers });
        // console.log(this.http.post(this.getUrl('get_auth_token'), body, options));
        // console.log(user.username+' este es el usuario '+user.password);
        // console.log(this.http.post(this.getUrl('get_auth_token/'), user))
        return this.http.post(this.getUrl('get_auth_token/'), user).map(this.getDatos).catch(this.error);
    };
    AuthService.prototype.logout = function () {
        sessionStorage.removeItem('token');
    };
    AuthService.prototype.error = function (error) {
        var msg = (error.message) ? error.message : 'Error desconocido en la conexion con la Api en user';
        console.error(msg);
        return Observable_1.Observable.throw(msg);
    };
    AuthService.prototype.getDatos = function (data) {
        var datos = data.json();
        console.log(data.json());
        if (datos && datos.token) {
            console.log('entra en el if');
            sessionStorage.setItem('token', datos.token);
            return true;
        }
        return false;
    };
    AuthService.prototype.getUrl = function (modelo) {
        console.log(this.apiUrl + modelo);
        return this.apiUrl + modelo;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth-service.js.map