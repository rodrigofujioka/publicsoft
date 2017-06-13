/**
 * Created by julio on 08/06/17.
 */
import { Component } from '@angular/core';
import {AppHttpService} from '../app/app-http.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    templateUrl: './jobs-new.component.html',
})

export class JobsNewComponent {
    public job: Object = {};

    constructor(
        private httpService: AppHttpService,
        private router: Router
    ) {}

    save(){
        this.httpService.builder('job')
            .insert(this.job)
            .then((res) => {
                this.router.navigate(['/jobs']);
            });
    }
}