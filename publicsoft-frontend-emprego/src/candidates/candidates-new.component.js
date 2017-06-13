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
var CandidatesNewComponent = (function () {
    function CandidatesNewComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.candidate = {};
    }
    CandidatesNewComponent.prototype.ngOnInit = function () {
        this.jobsList();
    };
    CandidatesNewComponent.prototype.jobsList = function () {
        var _this = this;
        this.httpService.builder('job')
            .list()
            .then(function (res) {
            _this.jobs = res.data;
        });
    };
    CandidatesNewComponent.prototype.save = function () {
        var _this = this;
        this.httpService.builder('candidate')
            .insert(this.candidate)
            .then(function (res) {
            _this.router.navigate(['/jobs']);
        });
    };
    return CandidatesNewComponent;
}());
CandidatesNewComponent = __decorate([
    core_1.Component({
        templateUrl: './candidates-new.component.html',
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService,
        router_1.Router])
], CandidatesNewComponent);
exports.CandidatesNewComponent = CandidatesNewComponent;
//# sourceMappingURL=candidates-new.component.js.map