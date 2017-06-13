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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by julio on 09/06/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AppHttpService = (function () {
    function AppHttpService(http) {
        this.http = http;
        this.setAccessToken();
    }
    AppHttpService.prototype.setAccessToken = function () {
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU1ZTM2ZDE0NzBjMDhiNDM1M2YwNzczZTA0ZDlkMmRmMDM0NDQ3YTg0MTgxNTk5NmY4YzI2MmU3NTRkNThlMTg4MGZiMGE5ODk2YTFjMGFkIn0.eyJhdWQiOiIyIiwianRpIjoiNTVlMzZkMTQ3MGMwOGI0MzUzZjA3NzNlMDRkOWQyZGYwMzQ0NDdhODQxODE1OTk2ZjhjMjYyZTc1NGQ1OGUxODgwZmIwYTk4OTZhMWMwYWQiLCJpYXQiOjE0OTY2OTUxMDIsIm5iZiI6MTQ5NjY5NTEwMiwiZXhwIjoxNTI4MjMxMTAyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hI9x--MKx4JDBpUR_sNXD1JC-jOGuebQufRFkOUEaQJMeqG-NaLd-SZe3eSXekzxPebEb8j23ShSs8eNfi5jfPmdq3oCsyAapR_WnebvzArpIyzVGBDTdqX4PIN_dyuizz5x_QlqKxEjHreIbA9B2kAtvkr5CNPajRwPVWA9HdSuluBEsg2vNdTlLVH3OfuRCDFB3Qit8EKGYJs8V89f4ioof5zRmzieFpe9PWeqE_nIq2hkcjBBl5rHfDHtnwRngonDTJeq1OqfMWE5HMjYgjqlXVKfaHvreOFBbDaw5gd1skEcRcCfkmsqOh94WvRwg_dZmNsVd4_qGz9GYE7E9IDyN3izHvhxAbdm052LBlwqCcCW4QYWaDiYDH0HsiT2rn7oQx9jyDAVGWV81QR797p5e2abDWGuuLFXaU4eJIB_y8cEL2r24TY6A2wroBYlTZZRBLxxMpbKIYykEmOVKrwn6gnlAIUQIkXdeH3RiNyiihJ1s0Z2bg8_V0icyGf5Q_jrZTixdbfAEKEyWwX3s2UmQFHG8lV0o_6M1Qa0hMknjjK4JE2Wo09wv0HmMl_Q-HzCnQYNvRdXYYue6GnpFB0znT556XXpI6RgX0dTE3zDUi4DVWZhPy6krXF_murgKr04HGB1qJipkIOlixFlkXYIvpipKir1gvHPhHOyWS0';
        this.header = new http_1.Headers({
            'Authorization': 'Bearer ' + token
        });
    };
    AppHttpService.prototype.builder = function (resource) {
        this.url = 'http://localhost:8000/api/' + resource;
        return this;
    };
    AppHttpService.prototype.list = function () {
        return this.http.get(this.url, { headers: this.header })
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.view = function (id) {
        return this.http.get(this.url + '/' + id, { headers: this.header });
    };
    AppHttpService.prototype.update = function (id, data) {
        return this.http.put(this.url + '/' + id, data, { headers: this.header })
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.insert = function (data) {
        return this.http.post(this.url, data, { headers: this.header })
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    return AppHttpService;
}());
AppHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppHttpService);
exports.AppHttpService = AppHttpService;
//# sourceMappingURL=app-http.service.js.map