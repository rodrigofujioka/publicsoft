/**
 * Created by julio on 08/06/17.
 */
import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {CandidatesComponent} from './candidates.component';
import {CandidatesViewComponent} from './candidates-view.component';
import {CandidatesNewComponent} from './candidates-new.component';

const appRoutes: Routes = [
    {path: 'candidates', component: CandidatesComponent},
    {path: 'candidates/new', component: CandidatesNewComponent},
    {path: 'candidates/:id', component: CandidatesViewComponent},
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
    ],
    declarations: [
        CandidatesComponent,
        CandidatesViewComponent,
        CandidatesNewComponent
    ],
    bootstrap: [CandidatesComponent],
})

export class CandidatesModule {
}