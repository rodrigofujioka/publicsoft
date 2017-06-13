/**
 * Created by julio on 08/06/17.
 */
import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppHttpService} from '../app/app-http.service';
import {FormsModule} from '@angular/forms';

import {JobsComponent} from './jobs.component';
import {JobsViewComponent} from './jobs-view.component';
import {JobsEditComponent} from './jobs-edit.component';
import {JobsNewComponent} from './jobs-new.component';

const appRoutes: Routes = [
    {path: 'jobs', component: JobsComponent},
    {path: 'jobs/new', component: JobsNewComponent},
    {path: 'jobs/:id', component: JobsViewComponent},
    {path: 'jobs/:id/edit', component: JobsEditComponent},
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
    ],
    declarations: [
        JobsComponent,
        JobsViewComponent,
        JobsEditComponent,
        JobsNewComponent,
    ],
    bootstrap: [JobsComponent],
    providers: [AppHttpService]
})

export class JobsModule {
}