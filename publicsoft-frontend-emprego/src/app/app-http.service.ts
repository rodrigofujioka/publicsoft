/**
 * Created by julio on 09/06/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class AppHttpService {
    private url: string;
    private header: Headers;
    constructor (private http: Http){
        this.setAccessToken();
    }

    setAccessToken(){
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU1ZTM2ZDE0NzBjMDhiNDM1M2YwNzczZTA0ZDlkMmRmMDM0NDQ3YTg0MTgxNTk5NmY4YzI2MmU3NTRkNThlMTg4MGZiMGE5ODk2YTFjMGFkIn0.eyJhdWQiOiIyIiwianRpIjoiNTVlMzZkMTQ3MGMwOGI0MzUzZjA3NzNlMDRkOWQyZGYwMzQ0NDdhODQxODE1OTk2ZjhjMjYyZTc1NGQ1OGUxODgwZmIwYTk4OTZhMWMwYWQiLCJpYXQiOjE0OTY2OTUxMDIsIm5iZiI6MTQ5NjY5NTEwMiwiZXhwIjoxNTI4MjMxMTAyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hI9x--MKx4JDBpUR_sNXD1JC-jOGuebQufRFkOUEaQJMeqG-NaLd-SZe3eSXekzxPebEb8j23ShSs8eNfi5jfPmdq3oCsyAapR_WnebvzArpIyzVGBDTdqX4PIN_dyuizz5x_QlqKxEjHreIbA9B2kAtvkr5CNPajRwPVWA9HdSuluBEsg2vNdTlLVH3OfuRCDFB3Qit8EKGYJs8V89f4ioof5zRmzieFpe9PWeqE_nIq2hkcjBBl5rHfDHtnwRngonDTJeq1OqfMWE5HMjYgjqlXVKfaHvreOFBbDaw5gd1skEcRcCfkmsqOh94WvRwg_dZmNsVd4_qGz9GYE7E9IDyN3izHvhxAbdm052LBlwqCcCW4QYWaDiYDH0HsiT2rn7oQx9jyDAVGWV81QR797p5e2abDWGuuLFXaU4eJIB_y8cEL2r24TY6A2wroBYlTZZRBLxxMpbKIYykEmOVKrwn6gnlAIUQIkXdeH3RiNyiihJ1s0Z2bg8_V0icyGf5Q_jrZTixdbfAEKEyWwX3s2UmQFHG8lV0o_6M1Qa0hMknjjK4JE2Wo09wv0HmMl_Q-HzCnQYNvRdXYYue6GnpFB0znT556XXpI6RgX0dTE3zDUi4DVWZhPy6krXF_murgKr04HGB1qJipkIOlixFlkXYIvpipKir1gvHPhHOyWS0';
        this.header = new Headers({
            'Authorization' : 'Bearer ' + token
        });
    }

    builder(resource: string){
        this.url = 'http://localhost:8000/api/' + resource;
        return this;
    }

    list(){
       return this.http.get(this.url, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    view(id: number){
        return this.http.get(this.url + '/' + id, {headers: this.header});
    }

    update(id: number, data: Object){
        return this.http.put(this.url + '/' + id, data, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    insert(data: Object){
        return this.http.post(this.url, data, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
}