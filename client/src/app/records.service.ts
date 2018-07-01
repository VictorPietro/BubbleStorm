import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecordsService {

    constructor(private http: HttpClient) {

    }

    getData(){
        return this.http.get('http://localhost:8080')
        .subscribe(data => {
            console.log("we got", data)
        })
    }
}