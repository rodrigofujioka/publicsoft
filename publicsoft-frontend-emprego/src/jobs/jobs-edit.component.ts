/**
 * Created by julio on 08/06/17.
 */
import {Component} from '@angular/core';
import {AppHttpService} from '../app/app-http.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
    templateUrl: './jobs-edit.component.html',
})

export class JobsEditComponent {
    public job: Object = {
        candidates: [{}]
    };

    constructor(
        private httpService: AppHttpService,
        private router: ActivatedRoute,
        private route: Router
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

    save(id: number){
        this.httpService.builder('job')
            .update(id, this.job)
            .then((res) => {
                this.route.navigate(['/jobs/' + id]);
            });
    }
}