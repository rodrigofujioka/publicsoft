/**candidates
 * Created by julio on 08/06/17.
 */
import { Component } from '@angular/core';
import {AppHttpService} from '../app/app-http.service';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
    templateUrl: './jobs-view.component.html',
})

export class JobsViewComponent {
    public job: Object = {
        candidates: [{}]
    };

    constructor(
        private httpService: AppHttpService,
        private router: ActivatedRoute
    ) {}

    ngOnInit() {
        this.router.params.subscribe((params:any) => {
            this.view(params.id)
        });
    }

    view(id: number) {
        this.httpService.builder('job')
            .view(id)
            .map((res) => res.json())
            .subscribe(
                data => this.job = data,
            );
    }
}