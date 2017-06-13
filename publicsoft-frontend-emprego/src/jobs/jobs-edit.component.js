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
var router_1 = require("@angular/router");
var JobsEditComponent = (function () {
    function JobsEditComponent(httpService, router, route) {
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.job = {
            candidates: [{}]
        };
    }
    JobsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.view(params.id);
        });
    };
    JobsEditComponent.prototype.view = function (id) {
        var _this = this;
        this.httpService.builder('job')
            .view(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.job = data; });
    };
    JobsEditComponent.prototype.save = function (id) {
        var _this = this;
        this.httpService.builder('job')
            .update(id, this.job)
            .then(function (res) {
            _this.route.navigate(['/jobs/' + id]);
        });
    };
    return JobsEditComponent;
}());
JobsEditComponent = __decorate([
    core_1.Component({
        templateUrl: './jobs-edit.component.html',
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService,
        router_1.ActivatedRoute,
        router_1.Router])
], JobsEditComponent);
exports.JobsEditComponent = JobsEditComponent;
//# sourceMappingURL=jobs-edit.component.js.map