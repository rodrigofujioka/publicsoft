/**
 * Created by julio on 08/06/17.
 */
import {Component} from '@angular/core';
import {AppHttpService} from '../app/app-http.service';
import {Router} from '@angular/router';


@Component({
    templateUrl: './candidates-new.component.html',
})

export class CandidatesNewComponent {

    public candidate: Object = {};

    public jobs: Array<Object>;

    constructor(private httpService: AppHttpService,
                private router: Router) {
    }

    ngOnInit() {
        this.jobsList();
    }

    jobsList() {
        this.httpService.builder('job')
            .list()
            .then((res) => {
                this.jobs = res.data;
            })
    }

    save() {
        this.httpService.builder('candidate')
            .insert(this.candidate)
            .then((res) => {
                this.router.navigate(['/jobs']);
            });
    }

}