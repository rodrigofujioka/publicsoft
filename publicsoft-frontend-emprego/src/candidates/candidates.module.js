"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by julio on 08/06/17.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var candidates_component_1 = require("./candidates.component");
var candidates_view_component_1 = require("./candidates-view.component");
var candidates_new_component_1 = require("./candidates-new.component");
var appRoutes = [
    { path: 'candidates', component: candidates_component_1.CandidatesComponent },
    { path: 'candidates/new', component: candidates_new_component_1.CandidatesNewComponent },
    { path: 'candidates/:id', component: candidates_view_component_1.CandidatesViewComponent },
];
var CandidatesModule = (function () {
    function CandidatesModule() {
    }
    return CandidatesModule;
}());
CandidatesModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule,
        ],
        declarations: [
            candidates_component_1.CandidatesComponent,
            candidates_view_component_1.CandidatesViewComponent,
            candidates_new_component_1.CandidatesNewComponent
        ],
        bootstrap: [candidates_component_1.CandidatesComponent],
    })
], CandidatesModule);
exports.CandidatesModule = CandidatesModule;
//# sourceMappingURL=candidates.module.js.map