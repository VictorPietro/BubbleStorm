import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecordsService {

    constructor(private http: HttpClient) {

    }

    getData(){
        return this.http.get('http://192.168.0.10:8080/guiguer')
        .subscribe(data => {
            console.log("we got", data)
        })
    }
}