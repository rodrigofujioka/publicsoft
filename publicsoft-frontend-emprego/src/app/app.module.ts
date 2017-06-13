import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CandidatesModule } from '../candidates/candidates.module';
import { JobsModule } from '../jobs/jobs.module';

const appRoutes: Routes = [
  {path: '', redirectTo: '/jobs', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    CandidatesModule,
    JobsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
