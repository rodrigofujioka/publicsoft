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
var app_http_service_1 = require("../app/app-http.service");
var forms_1 = require("@angular/forms");
var jobs_component_1 = require("./jobs.component");
var jobs_view_component_1 = require("./jobs-view.component");
var jobs_edit_component_1 = require("./jobs-edit.component");
var jobs_new_component_1 = require("./jobs-new.component");
var appRoutes = [
    { path: 'jobs', component: jobs_component_1.JobsComponent },
    { path: 'jobs/new', component: jobs_new_component_1.JobsNewComponent },
    { path: 'jobs/:id', component: jobs_view_component_1.JobsViewComponent },
    { path: 'jobs/:id/edit', component: jobs_edit_component_1.JobsEditComponent },
];
var JobsModule = (function () {
    function JobsModule() {
    }
    return JobsModule;
}());
JobsModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule,
        ],
        declarations: [
            jobs_component_1.JobsComponent,
            jobs_view_component_1.JobsViewComponent,
            jobs_edit_component_1.JobsEditComponent,
            jobs_new_component_1.JobsNewComponent,
        ],
        bootstrap: [jobs_component_1.JobsComponent],
        providers: [app_http_service_1.AppHttpService]
    })
], JobsModule);
exports.JobsModule = JobsModule;
//# sourceMappingURL=jobs.module.js.map