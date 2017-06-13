/**
 * Created by julio on 08/06/17.
 */
import {Component} from '@angular/core';
import {AppHttpService} from '../app/app-http.service';


@Component({
    templateUrl: './jobs.component.html',
})

export class JobsComponent {
    public jobs: Array<Object>;

    constructor(private httpService: AppHttpService) {
    }

    ngOnInit() {
        this.list();
    }

    list() {
        return this.httpService.builder('job')
            .list()
            .then((res) => {
                this.jobs = res.data;
                console.log(this.jobs);
            });
    }
}