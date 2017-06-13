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
/**candidates
 * Created by julio on 08/06/17.
 */
var core_1 = require("@angular/core");
var app_http_service_1 = require("../app/app-http.service");
var router_1 = require("@angular/router");
var CandidatesViewComponent = (function () {
    function CandidatesViewComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.candidate = {
            skills: [{}],
            workexperiences: [{}],
            jobs: [{}]
        };
    }
    CandidatesViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.view(params.id);
        });
    };
    CandidatesViewComponent.prototype.view = function (id) {
        var _this = this;
        this.httpService.builder('candidate')
            .view(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.candidate = data; });
    };
    return CandidatesViewComponent;
}());
CandidatesViewComponent = __decorate([
    core_1.Component({
        templateUrl: './candidates-view.component.html',
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService,
        router_1.ActivatedRoute])
], CandidatesViewComponent);
exports.CandidatesViewComponent = CandidatesViewComponent;
//# sourceMappingURL=candidates-view.component.js.map