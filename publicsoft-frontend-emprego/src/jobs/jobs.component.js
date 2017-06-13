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
 * Created by julio on 08/06/17.
 */
var core_1 = require("@angular/core");
var app_http_service_1 = require("../app/app-http.service");
var JobsComponent = (function () {
    function JobsComponent(httpService) {
        this.httpService = httpService;
    }
    JobsComponent.prototype.ngOnInit = function () {
        this.list();
    };
    JobsComponent.prototype.list = function () {
        var _this = this;
        return this.httpService.builder('job')
            .list()
            .then(function (res) {
            _this.jobs = res.data;
            console.log(_this.jobs);
        });
    };
    return JobsComponent;
}());
JobsComponent = __decorate([
    core_1.Component({
        templateUrl: './jobs.component.html',
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService])
], JobsComponent);
exports.JobsComponent = JobsComponent;
//# sourceMappingURL=jobs.component.js.map